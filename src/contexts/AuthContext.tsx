
import React, { createContext, useState, useEffect, useContext } from 'react';
import { User, AuthContextType } from '@/types/auth';
import { toast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from 'uuid';
import usersData from '@/data/users.json';

// Default context value
const defaultContextValue: AuthContextType = {
  user: null,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
  isAuthenticated: false,
};

// Create context
export const AuthContext = createContext<AuthContextType>(defaultContextValue);

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState<User[]>(usersData);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse stored user', error);
        localStorage.removeItem('currentUser');
      }
    }
  }, []);

  // Save users to localStorage whenever they change
  useEffect(() => {
    // In a real app, this would be a server API call
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Load latest users from localStorage in case they've been updated elsewhere
    const storedUsers = localStorage.getItem('users');
    const currentUsers = storedUsers ? JSON.parse(storedUsers) : users;

    const foundUser = currentUsers.find(
      (u: User) => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      setIsAuthenticated(true);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      toast({
        title: "Login successful",
        description: `Welcome back, ${foundUser.name}!`,
      });
      return true;
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Load latest users from localStorage
    const storedUsers = localStorage.getItem('users');
    const currentUsers = storedUsers ? JSON.parse(storedUsers) : users;

    // Check if user already exists
    const userExists = currentUsers.some((u: User) => u.email === email);
    if (userExists) {
      toast({
        title: "Signup failed",
        description: "Email already in use",
        variant: "destructive",
      });
      return false;
    }

    // Create new user
    const newUser: User = {
      id: uuidv4(),
      name,
      email,
      password, // In a real app, this would be hashed
      createdAt: new Date().toISOString(),
    };

    const updatedUsers = [...currentUsers, newUser];
    setUsers(updatedUsers);
    setUser(newUser);
    setIsAuthenticated(true);
    
    // Update localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    toast({
      title: "Signup successful",
      description: `Welcome, ${name}!`,
    });
    
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('currentUser');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

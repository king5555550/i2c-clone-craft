
import React, { createContext, useState, useEffect, useContext } from 'react';
import { User, AuthContextType, CreditCard } from '@/types/auth';
import { toast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from 'uuid';
import usersData from '@/data/users.json';
import creditCardsData from '@/data/creditCards.json';

// Default context value
const defaultContextValue: AuthContextType = {
  user: null,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
  isAuthenticated: false,
  startTrial: async () => false,
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
  const [creditCards, setCreditCards] = useState<CreditCard[]>(creditCardsData);

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
    
    // Also update the data json files (for demonstration purposes only)
    // In a real app, this would be handled by secure server-side code
    try {
      // This is simulating writing to json files
      console.log('Updated users:', users);
    } catch (error) {
      console.error('Error updating users data file:', error);
    }
  }, [users]);

  // Save credit cards to localStorage (for demo only - in production this would be securely stored)
  useEffect(() => {
    // This is for demo only - in a real app, credit card data would NEVER be stored this way
    localStorage.setItem('creditCards', JSON.stringify(creditCards));
    
    // Also update the data json files (for demonstration purposes only)
    // In a real app, this would be handled by secure server-side code
    try {
      // This is simulating writing to json files
      console.log('Updated credit cards:', creditCards);
    } catch (error) {
      console.error('Error updating credit cards data file:', error);
    }
  }, [creditCards]);

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
      trialActive: false,
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

  const startTrial = async (creditCardDetails: CreditCard): Promise<boolean> => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to start a trial",
        variant: "destructive",
      });
      return false;
    }

    try {
      // In a real app, card details would be sent to a payment processor and tokenized
      // We only store the tokenized version, not the actual card details
      // For this demo, we're simply storing the raw data (NOT recommended in production)
      
      // Mask the card number for improved security (even in this demo)
      const maskedCardNumber = `${'*'.repeat(12)}${creditCardDetails.cardNumber.slice(-4)}`;
      const maskedCVV = '***';
      
      const newCreditCard = {
        ...creditCardDetails,
        userId: user.id,
        cardNumber: maskedCardNumber, // Store masked version in "database"
        cvv: maskedCVV, // Store masked version in "database"
      };

      // Get current credit cards
      const storedCards = localStorage.getItem('creditCards');
      const currentCards = storedCards ? JSON.parse(storedCards) : creditCards;
      
      // Add new card
      const updatedCards = [...currentCards, newCreditCard];
      setCreditCards(updatedCards);
      localStorage.setItem('creditCards', JSON.stringify(updatedCards));

      // Update user with trial information
      const trialStartDate = new Date();
      const trialEndDate = new Date();
      trialEndDate.setDate(trialEndDate.getDate() + 30); // 30-day trial

      const updatedUser = {
        ...user,
        trialActive: true,
        trialStartDate: trialStartDate.toISOString(),
        trialEndDate: trialEndDate.toISOString(),
      };

      // Update user in users array
      const storedUsers = localStorage.getItem('users');
      const currentUsers = storedUsers ? JSON.parse(storedUsers) : users;
      const updatedUsers = currentUsers.map((u: User) => 
        u.id === user.id ? updatedUser : u
      );

      setUsers(updatedUsers);
      setUser(updatedUser);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));

      toast({
        title: "Trial activated",
        description: "Your 30-day free trial has been successfully activated!",
      });

      return true;
    } catch (error) {
      console.error('Error starting trial:', error);
      toast({
        title: "Error",
        description: "Failed to start your trial. Please try again.",
        variant: "destructive",
      });
      return false;
    }
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
    startTrial,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

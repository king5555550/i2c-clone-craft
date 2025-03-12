
export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // Note: In a real app, never store plain passwords
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, NavigateFunction } from 'react-router-dom';

interface AuthContextType {
  user: any;
  login: (data: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a wrapper component that will have access to router hooks
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <AuthProviderWithRouter>{children}</AuthProviderWithRouter>;
};

// This component will be rendered inside the Router context
const AuthProviderWithRouter = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/user', { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const login = async (data: any) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/', data, { withCredentials: true });
      setUser(response.data);
      
      // Navigate to user dashboard after successful login
      const from = location.state?.from?.pathname || '/user';
      navigate(from);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
    
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
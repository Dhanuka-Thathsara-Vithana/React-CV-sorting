import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: any;
  authToken: string | null;
  loading: boolean;
  login: (data: any) => Promise<void>;
  logout: () => void;
}
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <AuthProviderWithRouter>{children}</AuthProviderWithRouter>;
};

const AuthProviderWithRouter = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
  
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        
        if (!token) {
          setLoading(false);
          return;
        }
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        const response = await axios.get(`${baseUrl}/api/auth/user`, { withCredentials: true });
        setUser(response.data);
        setAuthToken(token);
      } catch (error) {
        setUser(null);
        setAuthToken(null);
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (data: any) => {
    try {
      const response = await axios.post(`${baseUrl}/api/auth/`, data, { withCredentials: true });
      const { userObj: userData, token } = response.data;
     
      // Store token
      if (token) {
        localStorage.setItem('authToken', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthToken(token);
      }
      
      setUser(userData);
      
      // Navigate to user dashboard after successful login
      const from = (userData.type === 'user' ? '/user' : '/com');
      navigate(from);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${baseUrl}/api/auth/logout`, {}, { withCredentials: true });
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      // Always clear state and storage regardless of API success
      setUser(null);
      setAuthToken(null);
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
      delete axios.defaults.headers.common['Authorization'];
      navigate('/login');
    }
  };

  return (
    <AuthContext.Provider value={{ user, authToken, loading, login, logout }}>
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
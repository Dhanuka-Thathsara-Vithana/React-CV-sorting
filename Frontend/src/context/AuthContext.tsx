import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: any;
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
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      setLoading(true);
      try {
        await axios.get(`${baseUrl}/api/auth/refresh-token`, {
                  withCredentials: true
         });
        // Use the correct endpoint that we fixed in the backend
        const response = await axios.get(`${baseUrl}/api/users/me`, { 
          withCredentials: true 
        });
        
        if (response.data) {
         // console.log("User data from API:", response.data);
          setUser(response.data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    
    checkAuthStatus();
  }, []);

  const login = async (data: any) => {
    try {
      const response = await axios.post(`${baseUrl}/api/auth`, data, { 
        withCredentials: true 
      });
      
      // Set the user data from the response
      if (response.data.user) {
        setUser(response.data.user);
      }

      // Navigate to the appropriate dashboard based on user type
      const userType = response.data.user?.type || 'user';
      const from = userType === 'user' ? '/user' : '/com';
      navigate(from);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${baseUrl}/api/auth/logout`, {}, { 
        withCredentials: true 
      });
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      setUser(null);
      navigate('/login');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
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
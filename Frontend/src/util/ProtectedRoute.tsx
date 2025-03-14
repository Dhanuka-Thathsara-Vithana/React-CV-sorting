import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: string | string[]; 
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { authToken, user, loading } = useAuth();

  const location = useLocation();

  
  if (loading) {
    return <div>Loading...</div>; 
  }

 
  if (!authToken) {
    
    return <Navigate to="/login" state={{ from: location }} replace />;
  }


  if (requiredRole && user) {
    const hasRequiredRole = Array.isArray(requiredRole) 
      ? requiredRole.includes(user.type) 
      : user.type === requiredRole;

    if (!hasRequiredRole) {
     
      return <Navigate to="/unauthorized" replace />;
    }
  }


  return <>{children}</>;
};

export default ProtectedRoute;
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { authToken, loading } = useAuth();
  if (loading) return null;
  return authToken ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

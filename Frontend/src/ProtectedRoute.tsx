import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";


export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/signin" />;
}

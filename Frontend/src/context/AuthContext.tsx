import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
  username: string;
  setUsername: (name: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded: any = jwtDecode(token);

      setIsLoggedIn(true);
      setUsername(decoded.username || ""); // ✅ correctly setting username
    } catch (err) {
      console.error("Invalid token");
      setIsLoggedIn(false);
      setUsername("");
    }
  }
}, []);


  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

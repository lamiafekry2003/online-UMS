import { createContext, ReactNode, useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode'

interface User{
  id:number;
  name:string;
  email:string;
}

// define interface type
interface AuthcontextType{
  userData:User|null;
  saveUserDate:()=> void

}
// Create the context
export const AuthContext = createContext<AuthcontextType|null>(null);

//any context must have it 
interface AuthContextProviderProps{
  children:ReactNode
}

export default function AuthContextProvider({ children}:AuthContextProviderProps) {
  const [userData, setUserData] = useState<User|null>(null);

  const saveUserDate = () => {
    const encodedToken = localStorage.getItem("userToken");
    if (encodedToken) {
      const decodedToken = jwtDecode<User>(encodedToken);
      setUserData(decodedToken);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserDate();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ saveUserDate, userData }}>
      {children}
    </AuthContext.Provider>
  );
}

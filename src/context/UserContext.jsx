import { createContext, useState } from "react";

export const userContext = createContext();

export default function UserProvider({ children }) {
  const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  }
  
  const [user, setUser] = useState(getUser());

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

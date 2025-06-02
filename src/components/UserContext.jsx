// src/contexts/UserContext.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  console.log("Context value:", context); // Add this for debugging
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

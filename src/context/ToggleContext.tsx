import React, { createContext, useContext, useState, ReactNode } from "react";

interface MyContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

const ModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </MyContext.Provider>
  );
};

export { ModeProvider, useMyContext };

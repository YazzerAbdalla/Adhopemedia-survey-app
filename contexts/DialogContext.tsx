"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface DialogContextProps {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

interface DialogProviderProps {
  children: ReactNode;
}

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isDialogOpen, setIsDialogOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = (): DialogContextProps => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

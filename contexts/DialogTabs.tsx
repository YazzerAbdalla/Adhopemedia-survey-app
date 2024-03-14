// DrawerTabsContext.tsx
"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface DialogTabsContextProps {
  dialogTab: string;
  setDialogTab: React.Dispatch<React.SetStateAction<string>>;
}

const DialogTabsContext = createContext<DialogTabsContextProps | undefined>(
  undefined
);

interface DialogTabsProviderProps {
  children: ReactNode;
}

const DialogTabsProvider: React.FC<DialogTabsProviderProps> = ({
  children,
}) => {
  const [dialogTab, setDialogTab] = useState("details");

  return (
    <DialogTabsContext.Provider value={{ dialogTab, setDialogTab }}>
      {children}
    </DialogTabsContext.Provider>
  );
};

const useDialogTabs = (): DialogTabsContextProps => {
  const context = useContext(DialogTabsContext);
  if (!context) {
    throw new Error("useDialogTabs must be used within a DialogTabsProvider");
  }
  return context;
};

export { DialogTabsProvider, useDialogTabs };

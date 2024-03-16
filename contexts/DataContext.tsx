"use client";
import { CardsProps } from "@/types/cardsTypes";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface DataContextProps {
  dataArr: CardsProps[];
  setDataArr: Dispatch<SetStateAction<CardsProps[]>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [dataArr, setDataArr] = useState<CardsProps[]>([]);

  return (
    <DataContext.Provider value={{ dataArr, setDataArr }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within an DataProvider");
  }
  return context;
};

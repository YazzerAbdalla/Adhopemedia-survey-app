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

interface SortContextProps {
  sortArr: CardsProps[];
  setSortArr: Dispatch<SetStateAction<CardsProps[]>>;
}

const SortContext = createContext<SortContextProps | undefined>(undefined);

export const SortProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sortArr, setSortArr] = useState<CardsProps[]>([]);

  return (
    <SortContext.Provider value={{ sortArr, setSortArr }}>
      {children}
    </SortContext.Provider>
  );
};

export const useSortContext = () => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error("useSortContext must be used within a SortProvider");
  }
  return context;
};

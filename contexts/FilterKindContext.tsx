// Array to amplement on it the device type sort
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

interface FilteredDataContextProps {
  filterKind: string;
  setFilterKind: Dispatch<SetStateAction<string>>;
}

const FilteredDataContext = createContext<FilteredDataContextProps | undefined>(
  undefined
);

export const FilteredDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filterKind, setFilterKind] = useState<string>("");

  return (
    <FilteredDataContext.Provider value={{ filterKind, setFilterKind }}>
      {children}
    </FilteredDataContext.Provider>
  );
};

export const useFilteredObjContext = () => {
  const context = useContext(FilteredDataContext);
  if (!context) {
    throw new Error(
      "useFilteredDataContext must be used within an FilteredDataProvider"
    );
  }
  return context;
};

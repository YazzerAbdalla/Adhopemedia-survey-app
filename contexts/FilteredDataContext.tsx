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
  filteredDataArr: CardsProps[];
  setFilteredDataArr: Dispatch<SetStateAction<CardsProps[]>>;
}

const FilteredDataContext = createContext<FilteredDataContextProps | undefined>(
  undefined
);

export const FilteredDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filteredDataArr, setFilteredDataArr] = useState<CardsProps[]>([]);

  return (
    <FilteredDataContext.Provider
      value={{ filteredDataArr, setFilteredDataArr }}
    >
      {children}
    </FilteredDataContext.Provider>
  );
};

export const useFilteredDataContext = () => {
  const context = useContext(FilteredDataContext);
  if (!context) {
    throw new Error(
      "useFilteredDataContext must be used within an FilteredDataProvider"
    );
  }
  return context;
};

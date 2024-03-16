// Array to implement on it the device type sort
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

interface SearchFilterContextProps {
  searchFilter: string;
  setSearchFilter: Dispatch<SetStateAction<string>>;
}

const SearchFilterContext = createContext<SearchFilterContextProps | undefined>(
  undefined
);

export const SearchFilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchFilter, setSearchFilter] = useState<string>("");

  return (
    <SearchFilterContext.Provider value={{ searchFilter, setSearchFilter }}>
      {children}
    </SearchFilterContext.Provider>
  );
};

export const useSearchFilterContext = () => {
  const context = useContext(SearchFilterContext);
  if (!context) {
    throw new Error(
      "useSearchFilterContext must be used within an SearchFilterProvider"
    );
  }
  return context;
};

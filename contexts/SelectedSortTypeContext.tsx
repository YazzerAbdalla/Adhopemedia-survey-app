"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface SelectedSortTypeContextProps {
  selectedSortType: string;
  setSelectedSortType: Dispatch<SetStateAction<string>>;
}

const SelectedSortTypeContext = createContext<
  SelectedSortTypeContextProps | undefined
>(undefined);

export const SelectedSortTypeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedSortType, setSelectedSortType] = useState<string>("unkown");

  return (
    <SelectedSortTypeContext.Provider
      value={{ selectedSortType, setSelectedSortType }}
    >
      {children}
    </SelectedSortTypeContext.Provider>
  );
};

export const useSelectedSortTypeContext = () => {
  const context = useContext(SelectedSortTypeContext);
  if (!context) {
    throw new Error("useSortContext must be used within a SortProvider");
  }
  return context;
};

"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
interface CardsProps {
  campaign_id: string;
  icon: string;
  name: string;
  description: string;
  short_description: string;
  amount: number;
  campaign_os_target: string;
  url?: string;
  instructions?: string;
  instructions_array?: string[];
  goals?: string;
  payout?: string;
  is_multi_reward?: boolean;
  is_market_research?: boolean;
  requires_redirection?: boolean;
  favourite?: number;
}

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

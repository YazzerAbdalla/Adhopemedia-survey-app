import NameOfSite from "../NameOfSite";
import MainCard from "../MainCard";
import FavouriteBox from "../FavouriteBox";
import MSearchBar from "../MSearchBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardsProps } from "@/types/cardsTypes";
import { useErrorContext } from "@/contexts/ErrorContext";

export default function Home() {
  const [cards, setCards] = useState<CardsProps[]>();
  const { error, setError } = useErrorContext();
  useEffect(() => {
    const data = axios
      .get("https://adhopemedia.com/api/GetOffers/10000/ker00sama")
      .then((res) =>
        res.data.error ? setError(res.data.error) : setCards(res.data.offers)
      )
      .catch((e) =>
        setError({
          message: "Some thing went wronge!!",
        })
      );
  }, []);
  return (
    <>
      <NameOfSite />
      <MSearchBar />
      <div className="w-full flex justify-center">
        <FavouriteBox />
      </div>
      <div className="flex w-full justify-center px-8 lg:px-24 mt-12">
        <div className="grid justify-center lg:grid-cols-3 gap-6">
          {cards?.map(
            ({
              icon,
              name,
              short_description,
              description,
              amount,
              campaign_os_target,
              campaign_id,
            }) => (
              <MainCard
                key={campaign_id}
                icon={icon}
                name={name}
                short_description={short_description}
                description={description}
                amount={amount}
                campaign_os_target={campaign_os_target}
                campaign_id={""}
                url={""}
                instructions={""}
                instructions_array={[]}
                goals={""}
                payout={""}
                is_multi_reward={false}
                is_market_research={false}
                requires_redirection={false}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

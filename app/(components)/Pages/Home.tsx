import React, { useEffect, useState } from "react";
import axios from "axios";
import NameOfSite from "../NameOfSite";
import FavouriteBox from "../FavouriteBox";
import CardError from "../cardError";
import MSearchBar from "../MSearchBar";
import MainDialog from "../MainDialog";
import PerkoxLoader from "../PerkoxLoader";
import { useErrorContext } from "@/contexts/ErrorContext";
import { useDataContext } from "@/contexts/DataContext";

export default function Home() {
  const { dataArr, setDataArr } = useDataContext();
  const { error, setError } = useErrorContext();
  const [loading, setLoading] = useState(true);
  console.log("🚀 ~ Home ~ error:", error);

  useEffect(() => {
    axios
      .get("https://adhopemedia.com/api/GetOffers/10000/ker00sama")
      .then((res) => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          setDataArr(res.data.offers);
        }
        setLoading(false);
      })
      .catch((e) => {
        setError({
          message: "Something went wrong!",
        });
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <PerkoxLoader />
      ) : error ? ( // Corrected conditional rendering here
        //@ts-ignore
        <CardError error={error.message} />
      ) : (
        <>
          <NameOfSite />
          <MSearchBar />
          <FavouriteBox />
          <div className="flex w-full justify-center px-8 lg:px-24 mt-12">
            <div className="grid justify-center lg:grid-cols-3 gap-6">
              {dataArr?.map(
                ({
                  icon,
                  name,
                  short_description,
                  description,
                  amount,
                  campaign_os_target,
                  campaign_id,
                }) => (
                  <MainDialog
                    key={campaign_id}
                    icon={icon}
                    name={name}
                    short_description={short_description}
                    description={description}
                    amount={amount}
                    campaign_os_target={campaign_os_target}
                    campaign_id={campaign_id}
                  />
                )
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

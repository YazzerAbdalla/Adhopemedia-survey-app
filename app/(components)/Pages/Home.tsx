import React, { useEffect, useState } from "react";
import axios from "axios";
import FavouriteBox from "../FavouriteBox";
import CardError from "../cardError";
import MSearchBar from "../MSearchBar";
import MainDialog from "../MainDialog";
import AdhopeLoader from "../AdhopeLoader";
import { useErrorContext } from "@/contexts/ErrorContext";
import { useDataContext } from "@/contexts/DataContext";
import NameOfSite from "../NameOfSite";
import { useSortContext } from "@/contexts/SortContext";
import { useFilteredObjContext } from "@/contexts/FilterKindContext";
import { useDeviceType } from "@/contexts/DeviceTypeContext";
import { DeviceTypeSort } from "@/app/(Fun)/DeviceTypeSort";
import { searchFilterFunction } from "@/app/(Fun)/SearchFilterFunction";
import { useSearchFilterContext } from "@/contexts/SearchFilterContext";
import IfNoActivities from "../IfNoActivities";
import PriceSortMenu from "../PriceSortMenu";
import { useSelectedSortTypeContext } from "@/contexts/SelectedSortTypeContext";
import { highSort } from "@/app/(Fun)/HighSort";
import { lowSort } from "@/app/(Fun)/LowSort";
import { CardsProps } from "@/types/cardsTypes";

export default function Home() {
  const { dataArr, setDataArr } = useDataContext();
  const { setDeviceType } = useDeviceType();
  const { setSortArr } = useSortContext();
  const { filterKind, setFilterKind } = useFilteredObjContext();
  const { error, setError } = useErrorContext();
  const { searchFilter } = useSearchFilterContext();
  const [loading, setLoading] = useState(true);
  const { selectedSortType, setSelectedSortType } =
    useSelectedSortTypeContext();
  const [sortedData, setSortedData] = useState<CardsProps[]>([]);

  let SortDataByKindDevice: CardsProps[];

  useEffect(() => {
    axios
      .get("https://adhopemedia.com/api/GetOffers/10000/ker00sama")
      .then((res) => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          setDataArr(res.data.offers);
          setSortArr(res.data.offers);
          setFilterKind("unkown");
          setDeviceType(res.data.offers[0].campaign_os_target);
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
  // Other useEffect to handle the states changes
  useEffect(() => {
    SortDataByKindDevice = DeviceTypeSort(dataArr, filterKind);
    SortDataByKindDevice = searchFilterFunction(
      SortDataByKindDevice,
      searchFilter
    );

    if (selectedSortType === "High Price") {
      SortDataByKindDevice = highSort(SortDataByKindDevice);
    } else if (selectedSortType === "Lower Price") {
      SortDataByKindDevice = lowSort(SortDataByKindDevice);
    } // No need to handle "Default" case as it remains unsorted

    setSortedData(SortDataByKindDevice);
  }, [dataArr, filterKind, searchFilter, selectedSortType]); // Dependencies for useEffect

  return (
    <div style={{ overflowX: "hidden" }}>
      {loading ? (
        <AdhopeLoader />
      ) : error ? (
        //@ts-ignore
        <CardError error={error.message} />
      ) : (
        <>
          <NameOfSite />
          <MSearchBar />
          <FavouriteBox />
          <PriceSortMenu
            selectedSortType={selectedSortType}
            setSelectedSortType={setSelectedSortType}
          />
          {sortedData.length === 0 ? (
            // Render IfNoActivities component if SortDataByKindDevice is empty
            <div className="flex justify-center">
              <IfNoActivities setNavTabs={null} />
            </div>
          ) : (
            // Otherwise, map over SortDataByKindDevice and render MainDialog for each item
            <div className="flex w-full justify-center px-8 lg:px-24 mt-12">
              <div className="grid justify-center -space-x-1 -mx-6 grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedData.map(
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
                      url=""
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
          )}
        </>
      )}
    </div>
  );
}

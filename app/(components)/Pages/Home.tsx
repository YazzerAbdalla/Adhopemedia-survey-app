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
import { useSelectedSortTypeContext } from "@/contexts/SelectedSortTypeContext";
import { highSort } from "@/app/(Fun)/HighSort";
import { lowSort } from "@/app/(Fun)/LowSort";
import { CardsProps } from "@/types/cardsTypes";
import { detectDeviceType } from "@/app/(Fun)/DetectDeviceType";

interface HomeProps {
  id: string;
  userID: string;
}
export default function Home({ id, userID }: HomeProps) {
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

  useEffect(() => {
    const deviceType = detectDeviceType(navigator.userAgent);
    setDeviceType(deviceType);
    setFilterKind(deviceType);
    axios
      .get(`https://adhopemedia.com/api/GetOffers/${id}/${userID}`)
      .then((res) => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          setDataArr(res.data.offers);
          setSortArr(res.data.offers);
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

  useEffect(() => {
    let sortedData: CardsProps[] = dataArr.slice(); // Copy dataArr

    if (selectedSortType === "High Price") {
      sortedData = highSort(sortedData);
    } else if (selectedSortType === "Lower Price") {
      sortedData = lowSort(sortedData);
    } // No need to handle "Default" case as it remains unsorted

    setSortedData(sortedData);
  }, [dataArr, selectedSortType]);

  useEffect(() => {
    if (!loading && !error) {
      let sortedDataByDevice: CardsProps[] = DeviceTypeSort(dataArr, filterKind);
      sortedDataByDevice = searchFilterFunction(sortedDataByDevice, searchFilter);
      setSortedData(sortedDataByDevice);
    }
  }, [loading, error, dataArr, filterKind, searchFilter]);

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
          {sortedData.length === 0 ? (
            <div className="flex justify-center">
              <IfNoActivities setNavTabs={null} />
            </div>
          ) : (
            <div className="flex w-full justify-center px-8 lg:px-24 mt-12">
              <div className="grid justify-center -space-x-1 -mx-6 grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedData.map(
                  ({
                    icon,
                    name,
                    short_description,
                    description,
                    instructions,
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
                      instructions={instructions}
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

"use client";
import ActivitiesCard from "../ActivitiesCard";
import { useEffect, useState } from "react";
import axios from "axios";
import IfNoActivities from "../IfNoActivities";
import { Activities } from "@/types/ActivitiesProps";

interface HomeProps {
  id: string;
  userID: string;
  setNavTabs: React.Dispatch<React.SetStateAction<string>>;
}
const Activity = ({ id, userID, setNavTabs }: HomeProps) => {
  const [activities, setActivities] = useState<Activities[] | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = axios
      .get(`https://adhopemedia.com/api/GetOffers/clicks/${id}/${userID}`)
      .then((res) =>
        res.data.error ? setActivities(null) : setActivities(res.data)
      )
      .catch((e) => setActivities(null))
      .then(() => setLoading(false));
  }, []);
  return (
    <>
      {loading ? (
        <div className="bodyLoading">
          <div className="container">
            <div className="lds-dual-ring"></div>
          </div>
        </div>
      ) : (
        <section className="flex justify-center w-full p-8">
          {activities ? (
            <div className="grid w-full p-12 gap-y-5 lg:grid-cols-2 justify-center items-center">
              {activities?.map(({ id, offername, status, image }) => (
                <ActivitiesCard
                  key={id} // Use a unique key for each card, here we use the index of the item
                  offername={offername} // Pass offername from the activity object
                  status={status} // Pass status from the activity object
                  image={image} // Pass image URL from the activity object
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center w-full  justify-center">
              <IfNoActivities setNavTabs={setNavTabs} />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Activity;

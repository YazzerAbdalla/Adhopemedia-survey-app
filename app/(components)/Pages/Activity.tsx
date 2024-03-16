"use client";
import ActivitiesCard from "../ActivitiesCard";
import { useEffect, useState } from "react";
import axios from "axios";
import IfNoActivities from "../IfNoActivities";
//import PerkoxLoader from "../PerkoxLoader";
import Navbar from "../Nav";

interface Activities {
  id: number;
  offername: string;
  status: string;
  image: string;
}
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
        <section className="mt-14">
            {activities ? (
         <div className="grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-24  py-8 justify-center gap-5">
         {activities.map(({ id, offername, status, image }) => (
                <>
                  <ActivitiesCard
                    key={id}
                    offername={offername}
                    status={status}
                    image={image}
                  />
                </>
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

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
      .get(`https://perkox.com/api/v1/offers-iframe/clicks/${id}/${userID}`)
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
            <div className="flex  flex-col md:flex-row gap-10  content-center flex-wrap md:px-8 px-4 mt-7 w-full">
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

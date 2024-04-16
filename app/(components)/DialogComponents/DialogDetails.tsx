/* eslint-disable @next/next/no-img-element */
import { useDataContext } from "@/contexts/DataContext";
import { useDialogTabs } from "@/contexts/DialogTabs";
import { CardsProps } from "@/types/cardsTypes";
import React from "react";

const DialogDetails = ({
  name,
  description,
  instructions,
  instructions_array,
}: CardsProps) => {
  const { dialogTab } = useDialogTabs();
  const hrStyle: React.CSSProperties = { borderColor: "black" };

  let showDetail = dialogTab === "details";

  return (
    <>
      {showDetail && (
        <div className="w-full overflow-scroll new-offer-popup__text-content overflow-y-scroll flex flex-col">
          <div className="flex flex-col gap-1 offer-instructoins">
            <div className="offer-description  text-wrap">
              <span className="title">Offer description :</span>
              <h1 className="text-gray-300 font-bold text-sm "> {name} : </h1>
              <p className="description"> {description && description}</p>
              {instructions && (
                <div className="w-full border-t-[15px] border-b-[15px] border-[#B094E5] rounded-[14px] p-6">
                  <span className="title">Instrucions : </span>
                  <p className="description"> {instructions}</p>
                </div>
              )}
              {instructions_array && (
                <div className="new-offer-popup__steps-wrapper w-[100%]">
                  <span className="title ">All steps</span>
                  <span className="horizontal-line"></span>
                  <div className="steps">
                    {instructions_array.map((item, index) => (
                      <div key={index} className="step">
                        <div className="step-info">
                          <span className="step-counter">
                            {++index}
                          </span>
                          <div className="text-content">
                            <span className="title">{item}</span>
                            <p className="text"></p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <span className="title">
                To enjoy our offerwall, please remember:
              </span>

              <p className="text-gray-300 font-bold text-sm ">
                <ol>
                  <br />{" "}
                  <li>
                    1.Use a genuine device: Emulators are not allowed. Avoid
                    using VPNs or proxies to ensure accurate location tracking
                    and the best user experience.
                  </li>
                  <br />
                  <hr style={hrStyle} />
                  <br />{" "}
                  <li>
                    2.Stick with one device and location: Completing tasks on
                    the same device and location helps track your progress.
                  </li>
                  <br />
                  <hr style={hrStyle} />
                  <br />{" "}
                  <li>
                    3.Time limit: Most offers have a 30-day completion window
                    unless stated otherwise, but also pay attention to specified
                    time limits for offer completion.
                  </li>
                  <br />
                  <hr style={hrStyle} />
                  <br />{" "}
                  <li>
                    4.New users: If you’re new, you will be able to enjoy the
                    offers. Existing users may not be eligible unless
                    specifically mentioned in the offer details.
                  </li>
                  <br />
                  <hr style={hrStyle} />
                  <br />{" "}
                  <li>
                    5.Reward delivery: Rewards are usually prompt, but there may
                    be up to a 24-hour delay in some cases.
                  </li>
                  <br />
                  <hr style={hrStyle} />
                  <br />{" "}
                  <li>
                    6.Mobile app tips: Open the app immediately after
                    installation for a smooth experience and higher completion
                    chances.
                  </li>
                  <br />
                  <hr style={hrStyle} />
                </ol>
                <br />{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogDetails;

import { useDataContext } from "@/contexts/DataContext";
import React from "react";
import GenerateQRCode from "./Qr";
import { useDialogTabs } from "@/contexts/DialogTabs";
import { CardsProps } from "@/types/cardsTypes";

const DrawerLinks = ({ campaign_os_target, url }: CardsProps) => {
  const { dialogTab } = useDialogTabs();

  const showLinks = dialogTab === "links";

  return (
    <>
      {showLinks && (
        <div className="new-offer-popup__content gap-4 z-[1000] p-4 w-full overflow-y-scroll ">
          <div className="new-offer-popup__links">
            <div className="qrcode-wrapper">
              <div id="qrcode" title={url}>
                <GenerateQRCode url={url} />
              </div>
              <div className="text-content">
                <span className="title">QR code</span>
                <p className="text-white">
                  Scan the generated image code with your{" "}
                  {campaign_os_target === "android"
                    ? "Android"
                    : campaign_os_target === "ios"
                    ? "iOS"
                    : "Desktop"}{" "}
                  device
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DrawerLinks;

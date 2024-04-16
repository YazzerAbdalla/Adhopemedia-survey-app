/* eslint-disable @next/next/no-img-element */
import { Dialog } from "@radix-ui/react-dialog";

import {
  Dialog as RadixDialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import DialogNewHeader from "./DialogComponents/DialogNewHeader";
import MainCard from "./MainCard";
import { CardsProps } from "@/types/cardsTypes";
import DialogTabs from "./DialogComponents/DialogTabs";
import { useDeviceType } from "@/contexts/DeviceTypeContext";
import DialogDetails from "./DialogComponents/DialogDetails";
import DialogLinks from "./DialogComponents/DialogLinks";
import MoMainCard from "./MoMainCard";
import { useDialogTabs } from "@/contexts/DialogTabs";

const MainDialog = ({
  campaign_id,
  icon,
  name,
  short_description,
  description,
  instructions,
  instructions_array,
  amount,
  campaign_os_target,
  url,
  goals,
}: CardsProps) => {
  const { deviceType } = useDeviceType();
  const { dialogTab } = useDialogTabs();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <MainCard
            url=""
            amount={amount}
            campaign_id={campaign_id}
            campaign_os_target={campaign_os_target}
            description={description}
            icon={icon}
            short_description={short_description}
            name={name}
          />
          <MoMainCard
            url=""
            amount={amount}
            campaign_id={campaign_id}
            campaign_os_target={campaign_os_target}
            description={description}
            icon={icon}
            short_description={short_description}
            name={name}
          />
        </div>
      </DialogTrigger>
      <DialogContent
        style={{ backgroundImage: 'url("/bgpage.png")' }}
        className="flex flex-col  gap-0 max-w-[354px] min-w-[354px] lg:max-w-[531.99px]  lg:min-w-[534px] border-2 border-[#280A46] min-h-[533] max-h-[533px]  lg:min-h-[533px] lg:max-h-[533px] "
      >
        <DialogNewHeader
          url=""
          amount={amount}
          campaign_id={campaign_id}
          campaign_os_target={campaign_os_target}
          description={description}
          icon={icon}
          short_description={short_description}
          name={name}
        />
        <DialogTabs />
        <DialogDetails
          url=""
          amount={amount}
          campaign_id={campaign_id}
          campaign_os_target={campaign_os_target}
          description={description}
          instructions_array={instructions_array}
          instructions={instructions}
          icon={icon}
          short_description={short_description}
          name={name}
        />
        <DialogLinks
          campaign_id={campaign_id}
          icon={icon}
          name={name}
          url={url}
          description={description}
          short_description={short_description}
          goals={goals}
          amount={amount}
          campaign_os_target={campaign_os_target}
        />
        <DialogFooter>
          {dialogTab !== "links" &&
            (deviceType === "web" ||
              (campaign_os_target === "ios" && deviceType === "iOS") ||
              (campaign_os_target === "android" &&
                deviceType === "Android")) && (
              <div className="w-full flex justify-center items-center ">
                <a
                  className="flex justify-center items-center text-[#180934] font-bold text-md py-1 px-16 rounded-xl max-w-[160px] min-w-[160px] min-h-[30px] max-h-[30px] lg:max-w-[201px] lg:min-w-[201px] lg:min-h-[39px] lg:max-h-[39px]"
                  style={{
                    background:
                      "linear-gradient(92.16deg, #7655FE 0%, #EE77FF 37.1%, #FE6FFD 66.51%, #FF13DE 100%)",
                  }}
                  href={url}
                >
                  {`${amount} `}
                  <img src={"/coinIcon.png"} alt="" width={20} height={20} />
                </a>
              </div>
            )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MainDialog;

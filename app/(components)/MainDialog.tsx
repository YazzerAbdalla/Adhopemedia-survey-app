import { Children, useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Dialog } from "@radix-ui/react-dialog";

import {
  Dialog as RadixDialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDialog } from "@/contexts/DialogContext";
import Image from "next/image";
import DialogNewHeader from "./DrawerComponents/DialogNewHeader";
import { useDialogTabs } from "@/contexts/DialogTabs";
import { useCardContext } from "@/contexts/CardContext";
import MainCard from "./MainCard";
import { CardsProps } from "@/types/cardsTypes";
import DialogTabs from "./DrawerComponents/DialogTabs";
import { Button } from "@/components/ui/button";
import { useDeviceType } from "@/contexts/DeviceTypeContext";
import DialogDetails from "./DrawerComponents/DialogDetails";
import DialogLinks from "./DrawerComponents/DialogLinks";

interface dataProps {
  name: string;
  instructions: string;
  image: string;
  os: string;
  reward: number;
  id: string;
}

const MainDialog = ({
  campaign_id,
  icon,
  name,
  short_description,
  description,
  amount,
  campaign_os_target,
  url,
  goals,
}: CardsProps) => {
  const { setDeviceType } = useDeviceType();

  useEffect(() => {
    setDeviceType(campaign_os_target);
  }, []);
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
      </DialogContent>
    </Dialog>
  );
};

export default MainDialog;

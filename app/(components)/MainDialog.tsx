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
  const [goal, setGoal] = useState(350);
  const { isDialogOpen, setIsDialogOpen } = useDialog();
  const { setDialogTab } = useDialogTabs();
  const { cardID, setCardID } = useCardContext();
  const { setDeviceType } = useDeviceType();

  useEffect(() => {
    setDeviceType(campaign_os_target);
  }, []);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <MainCard
            amount={amount}
            campaign_id={campaign_id}
            campaign_os_target={campaign_os_target}
            description={description}
            icon={icon}
            short_description={short_description}
            name={name}
            url={""}
            instructions={""}
            instructions_array={[]}
            goals={""}
            payout={""}
            is_multi_reward={false}
            is_market_research={false}
            requires_redirection={false}
          />
        </div>
      </DialogTrigger>
      <DialogContent
        style={{ backgroundImage: 'url("/bgpage.png")' }}
        className="flex flex-col gap-0 max-w-[600px]  min-w-[600px] border-2 border-[#280A46]  min-h-[450px] max-h-[500px] "
      >
        <DialogNewHeader
          campaign_id={campaign_id}
          icon={icon}
          name={name}
          url={""}
          instructions={"Complete Offers to Earn Coins"}
          instructions_array={[]}
          description={description}
          short_description={short_description}
          goals={""}
          payout={""}
          amount={amount}
          is_multi_reward={false}
          is_market_research={false}
          requires_redirection={false}
          campaign_os_target={campaign_os_target}
        />
        <DialogTabs />
        <DialogDetails
          campaign_id={campaign_id}
          icon={icon}
          name={name}
          url={""}
          instructions={"Complete Offers to Earn Coins"}
          instructions_array={[]}
          description={description}
          short_description={short_description}
          goals={goals}
          payout={""}
          amount={amount}
          is_multi_reward={false}
          is_market_research={false}
          requires_redirection={false}
          campaign_os_target={campaign_os_target}
        />
      </DialogContent>
    </Dialog>
  );
};

export default MainDialog;

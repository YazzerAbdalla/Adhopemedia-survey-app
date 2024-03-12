import { Children, useState } from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Dialog } from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/button";
import {
    Dialog as RadixDialog, 
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useDrawer } from "@/contexts/DrawerContext";
import DrawerNewContent from "./DrawerComponents/DrawerDetails";
import Image from "next/image";
import DrawerNewHeader from "./DrawerComponents/DrawerNewHeader";
import DrawerTabs from "./DrawerComponents/DrawerTabs";
import DrawerDetails from "./DrawerComponents/DrawerDetails";
import DrawerLinks from "./DrawerComponents/DrawerLinks";
import { useDrawerTabs } from "@/contexts/DrawerTabs";
import { useCardContext } from "@/contexts/CardContext";
import MainCard from "./MainCard";

interface dataProps {
  name: string;
  instructions: string;
  image: string;
  os: string;
  reward: number;
  id: number;
}

const DrawerDemo = ({
  id,
  name,
  instructions,
  image,
  os,
  reward,
  onClick, // Add onClick prop
}: dataProps & { onClick: () => void }) => {
  const [goal, setGoal] = useState(350);
  const { isDrawerOpen, setIsDrawerOpen } = useDrawer();
  const { setDrawerTab } = useDrawerTabs();
  const { cardID, setCardID } = useCardContext();

  function handleClick() {
    onClick();
    setCardID(id);
  }

  // Function to close the drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setDrawerTab("details");
    setCardID(0);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <MainCard
          id={id}
          name={name}
          instructions={instructions}
          image={image}
          reward={reward}
          os={os}
          onClick={handleClick}
        />
      </DialogTrigger >

      <RadixDialog open={isDrawerOpen && cardID === id} onClose={closeDrawer}>
        <DrawerContent
          className="z-[2000] text-white h-fit flex max-h-[80vh]"
          style={{
            background:
              "linear-gradient(150deg, rgb(84 1 141) 0%, rgba(89, 42, 102, 1) 99%)",
          }}
        >
          <>
            <DialogHeader
              className=" "
              style={{
                background:
                  "linear-gradient(150deg, rgb(84 1 141) 0%, rgba(89, 42, 102, 1) 99%)",
              }}
            >
              <DrawerNewHeader cardId={cardID} />
              <DrawerTabs />
              <button
                onClick={closeDrawer}
                className="popup__close-js top-[2rem] right-[2rem] absolute"
              >
                <Image src="/x.svg" alt="" width={16} height={16} />
              </button>
            </DialogHeader>
            <DrawerDetails cardId={cardID} />
            <DrawerLinks cardId={cardID} />
          </>
         
      </RadixDialog>
    </Dialog>
  );
};

export default DrawerDemo;

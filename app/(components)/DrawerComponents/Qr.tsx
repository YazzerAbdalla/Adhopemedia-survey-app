import React from "react";
import QRCode from "qrcode.react";
import { CardsProps } from "@/types/cardsTypes";


const GenerateQRCode = ({ url }: CardsProps) => {
  return (
    <QRCode
      value={url}
      size={147} // Adjust the size of the QR code as needed
      renderAs="svg" // You can use "canvas" or "svg"
    />
  );
};

export default GenerateQRCode;

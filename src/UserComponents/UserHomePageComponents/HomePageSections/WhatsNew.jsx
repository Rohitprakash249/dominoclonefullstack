import React from "react";

export default function WhatsNew(props) {
  const WhatsNewPhotos = [
    "whatsNew/bulk.jpg",
    "whatsNew/cheeseburst.jpg",
    "whatsNew/cheeseVolcano.jpg",
    "whatsNew/freePizza.jpg",
    "whatsNew/superSaving.jpg",
  ];
  return (
    <>
      <div className="px-4">
        <h1 className="text-lg font-bold ">What's New</h1>
        <div className="flex justify-between  whitespace-nowrap flex-shrink-0 overflow-auto">
          {WhatsNewPhotos.map((singleItem) => (
            <img
              key={singleItem}
              className="px-1 py-2 rounded-2xl h-[180px] "
              src={singleItem}
              alt={singleItem}
            ></img>
          ))}
        </div>
      </div>
    </>
  );
}

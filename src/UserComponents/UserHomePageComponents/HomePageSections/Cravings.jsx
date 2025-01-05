import React from "react";

export default function Cravings(props) {
  const photoData = [
    { name: "Cheese Burst Pizza", source: "cravings/cheeseburst.jpg" },
    { name: "Cheese Volcano", source: "cravings/cheesevolcano.jpg" },
    { name: "Garlic Bread & More", source: "cravings/garlicbread.jpg" },
    { name: "Gourmet Pizza", source: "cravings/Gourmet.png" },
    { name: "Value Combos", source: "cravings/MealsCombos.jpg" },
    { name: "Non-Veg Pizza", source: "cravings/Nonveg.png" },
    { name: "Desserts", source: "cravings/olddeserts.jpg" },
    { name: "Pizza Mania", source: "cravings/PizzaManianew.png" },
    { name: "Veg Pizza", source: "cravings/VegPizza.png" },
  ];
  return (
    <>
      <div className="my-2 px-3">
        <p className="text-[#2e2e2e] text-lg font-bold ml-1">
          What are you craving for?
        </p>
        <div className=" flex flex-row overflow-auto whitespace-nowrap justify-between ml-1 my-3">
          {photoData.map((singleImage) => (
            <CreateImage
              key={singleImage.name}
              imageName={singleImage.name}
              imageSource={singleImage.source}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function CreateImage({ imageName, imageSource }) {
  return (
    <div className="mx-2 flex-shrink-0">
      <img
        className="h-[90px] w-[90px]"
        alt={imageName}
        src={imageSource}
      ></img>
      <p className="text-[12px] font-semibold my-1 text-center text-[#6f6f6f]">
        {imageName}
      </p>
    </div>
  );
}

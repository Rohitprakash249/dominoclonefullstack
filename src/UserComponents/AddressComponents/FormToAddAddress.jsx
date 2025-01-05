import React from "react";

import MapInputField from "./MapInputField";
import LocationFields from "./LocationFields";
import SaveAddressAsButton from "./SaveAddressAsButton";
export default function FormToAddAddress({
  setTypeAddress,
  address,
  typeAddress,
  setFlatOrBuilding,
  mapPosition,
  flatOrBuilding,
  setAddress,
}) {
  return (
    <>
      <div className="flex flex-col w-full md:w-[60%] border px-4 py-3 shadow-lg gap-4">
        <LocationFields />
        <MapInputField
          setFlatOrBuilding={setFlatOrBuilding}
          address={address}
          flatOrBuilding={flatOrBuilding}
          setAddress={setAddress}
        />
        <SaveAddressAsButton
          setTypeAddress={setTypeAddress}
          typeAddress={typeAddress}
          address={address}
          flatOrBuilding={flatOrBuilding}
          mapPosition={mapPosition}
        />
      </div>
    </>
  );
}

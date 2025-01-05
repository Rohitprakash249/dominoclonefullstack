import React, { useEffect, useState } from "react";
import Map from "../UserComponents/MapComponents/Map";
import FormToAddAddress from "../UserComponents/AddressComponents/FormToAddAddress";

export default function AddNewAddress(props) {
  const [mapPosition, setMapPosition] = useState([28.4595, 75.0266]);
  const [displayAlert, setDisplayAlert] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const [typeAddress, setTypeAddress] = useState("Home");
  const [address, setAddress] = useState("");
  const [flatOrBuilding, setFlatOrBuilding] = useState("");
  console.log(flatOrBuilding);
  useEffect(function getLocation() {
    // Check if Geolocation is available
    console.log(navigator.geolocation);
    if (navigator.geolocation) {
      // Get the current position of the user
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Fetch latitude and longitude from the position object
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          // Display the coordinates
          setMapPosition([latitude, longitude]);
        },
        function (error) {
          // Handle errors (e.g., permission denied)
          setDisplayAlert(error.message);
          console.error("Error getting location: " + error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <div className="h-svh w-full">
        <Map mapPosition={mapPosition} toSetMapPosition={setMapPosition} />
        <div className="w-full flex justify-center">
          <FormToAddAddress
            setAddress={setAddress}
            address={address}
            setTypeAddress={setTypeAddress}
            flatOrBuilding={flatOrBuilding}
            setFlatOrBuilding={setFlatOrBuilding}
            typeAddress={typeAddress}
            mapPosition={mapPosition}
          />
        </div>
      </div>
    </>
  );
}

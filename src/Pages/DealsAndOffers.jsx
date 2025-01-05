import React, { useState } from "react";
import DealsHeader from "../UserComponents/DealsAndOffersComponents/DealsHeader";
import CouponSection from "../UserComponents/DealsAndOffersComponents/CouponSection";
import ErrorModal from "../UserComponents/DealsAndOffersComponents/ErrorModal";

export default function DealsAndOffers(props) {
  const [errorOccured, setErrorOccured] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Something went wrong! kindly check!"
  );
  return (
    <>
      <div className=""></div>
      <DealsHeader />
      <ErrorModal
        errorOccured={errorOccured}
        setErrorOccured={setErrorOccured}
        errorMessage={errorMessage}
      />
      <CouponSection
        setErrorMessage={setErrorMessage}
        setErrorOccured={setErrorOccured}
      />
    </>
  );
}

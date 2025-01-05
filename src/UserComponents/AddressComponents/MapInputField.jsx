import React from "react";
import InputField from "./InputField";
import { Box, TextField } from "@mui/material";

export default function MapInputField({ setFlatOrBuilding, setAddress }) {
  function toSetAddress(e) {
    setAddress(e.target.value);

    console.log(e.target.value);
  }
  function setFlatNo(e) {
    setFlatOrBuilding(e.target.value);
  }
  return (
    <>
      <div className="flex flex-col gap-3">
        {/* <Box sx={{ width: 700, maxWidth: "100%" }}> */}
        <TextField
          onChange={setFlatNo}
          fullWidth
          label="Building / House / Flat / Floor No*"
          id="fullWidth"
          // required="true"
          size="small"
        />
        <TextField
          onChange={toSetAddress}
          fullWidth
          label="Enter Address"
          id="fullWidth"
          // required="true"
          size="small"
        />
        {/* </Box> */}
      </div>
    </>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputField({ type, runFunction }) {
  function runonchange(e) {
    console.log(e.target.value);
  }
  return (
    <Box sx={{ width: 350, maxWidth: "80%" }}>
      <TextField
        onChange={(e) => runFunction(e.target.value)}
        fullWidth
        label={type}
        id="fullWidth"
      />
    </Box>
  );
}

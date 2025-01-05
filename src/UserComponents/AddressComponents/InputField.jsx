import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputField({ type }) {
  return (
    <Box sx={{ width: 700, maxWidth: "100%" }}>
      <TextField
        fullWidth
        label={type}
        id="fullWidth"
        // required="true"
        size="small"
      />
    </Box>
  );
}

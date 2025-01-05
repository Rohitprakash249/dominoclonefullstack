import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputFieldPassword({ type, setPassword }) {
  return (
    <Box sx={{ width: 350, maxWidth: "80%" }}>
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        label={type}
        id="fullWidth"
      />
    </Box>
  );
}

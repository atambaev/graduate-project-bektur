import * as React from "react";
import Box from "@mui/material/Box";
import { SpinnerDiamond } from "spinners-react";

export default function Spinner() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <SpinnerDiamond />
    </Box>
  );
}

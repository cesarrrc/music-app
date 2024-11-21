import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function DiscreteSlider({ state, setState }) {
  const handleChange = (e) => {
    const { value } = e.target;
    setState((prev) => ({
      ...prev,
      volume: value,
    }));
  };
  return (
    <Box sx={{ maxWidth: 300, width: "100%", paddingLeft: 2, paddingRight: 2 }}>
      <Slider
        aria-label="Temperature"
        value={state}
        valueLabelDisplay="auto"
        shiftStep={30}
        min={10}
        max={100}
        step={10}
        marks
        onChange={handleChange}
      />
    </Box>
  );
}

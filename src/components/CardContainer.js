import React from "react";
import Box from "@mui/material/Box";
import Card from "./Card";
import Switch from "./Switch";
import Slider from "./Slider";
import Select from "./Select";

const CardContainer = ({ state, setState }) => {
  return (
    <Box display="flex" gap={2}>
      <Card
        state={state.online}
        setState={setState}
        component={Switch}
        title="Online Mode"
        description="Is this application connected to the internet?"
      />
      <Card
        state={state.volume}
        setState={setState}
        component={Slider}
        title="Master Volume"
        description="Overrides all other sound settings in this application."
      />
      <Card
        state={state.quality}
        setState={setState}
        component={Select}
        title="Sound Quality"
        description="Manually control the music quality in event of poor connection."
      />
    </Box>
  );
};

export default CardContainer;

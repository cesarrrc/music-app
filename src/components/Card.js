import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({
  title,
  description,
  state,
  setState,
  component: Component,
}) {
  return (
    <Card sx={{ flex: 1 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        {Component && <Component setState={setState} state={state} />}
      </CardActions>
    </Card>
  );
}

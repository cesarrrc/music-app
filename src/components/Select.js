import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ state, setState }) {
  const handleChange = (event) => {
    setState((prev) => ({ ...prev, quality: event.target.value }));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Quality</InputLabel>
      <Select
        sx={{ height: 36 }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state}
        label="Quality"
        onChange={handleChange}
      >
        <MenuItem value={1}>Low</MenuItem>
        <MenuItem value={2}>Medium</MenuItem>
        <MenuItem value={3}>Best</MenuItem>
      </Select>
    </FormControl>
  );
}

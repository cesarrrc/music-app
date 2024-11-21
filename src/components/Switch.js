import { useEffect } from "react";
import Switch from "@mui/material/Switch";

export default function BasicSwitches({ state, setState }) {
  const handleChange = () => {
    setState((prev) => {
      return { ...prev, online: !state };
    });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <Switch checked={state} onChange={handleChange} name="volume" />;
}

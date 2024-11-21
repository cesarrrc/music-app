import { useState } from "react";
import { Container, Typography } from "@mui/material";

import SystemNotifications from "./SystemNotifications";
import CardContainer from "./CardContainer";

const Dashboard = ({ username }) => {
  const [state, setState] = useState({
    online: true,
    volume: 30,
    quality: 2,
  });

  return (
    <Container maxWidth="md">
      <Typography
        variant="h3"
        marginTop={6}
        marginBottom={6}
        color="text.secondary"
      >
        Welcome {username}!
      </Typography>
      <CardContainer state={state} setState={setState} />
      <SystemNotifications state={state} />
    </Container>
  );
};

export default Dashboard;

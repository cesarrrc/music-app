import { Box, Typography } from "@mui/material";
import React from "react";

const SystemNotifications = ({ state }) => {
  return (
    <Box>
      <Typography variant="h4" marginTop={6} marginBottom={2}>
        System Notifications:
      </Typography>
      {!state.online && (
        <Typography variant="body1" marginBottom={1}>
          Your application is offline. You won't be able to share or stream
          music to other devices.
        </Typography>
      )}
      {state.volume > 70 && (
        <Typography variant="body1" marginBottom={1}>
          Listening to music at a high volume could cause long-term hearing
          loss.
        </Typography>
      )}
      {state.quality === 1 && (
        <Typography variant="body1" marginBottom={1}>
          Music quality is degraded. Increase quality if your connection allows
          it.
        </Typography>
      )}
    </Box>
  );
};

export default SystemNotifications;

import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

export default function BasicTextFields({
  username,
  setUsername,
  setLoggedIn,
}) {
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Box component={Paper} width={300} margin={"40px auto"} padding={4}>
        <Stack component="form" spacing={2}>
          <TextField
            id="username"
            label="Username"
            variant="standard"
            value={username}
            onChange={handleChange}
            required
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            autoComplete="new-password"
            required
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

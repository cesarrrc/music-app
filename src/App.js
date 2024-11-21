import { useState } from "react";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Nav />
      {loggedIn ? (
        <Dashboard username={username} />
      ) : (
        <Login
          username={username}
          setUsername={setUsername}
          setLoggedIn={setLoggedIn}
        />
      )}
    </div>
  );
}

export default App;

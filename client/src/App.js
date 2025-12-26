import { useState } from "react";
import JoinRoom from "./components/JoinRoom";
import ChatRoom from "./components/ChatRoom";
import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <>
      {!user ? (
        <JoinRoom setSocket={setSocket} setUser={setUser} />
      ) : (
        <ChatRoom socket={socket} user={user} />
      )}
    </>
  );
}

export default App;

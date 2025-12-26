import { useEffect, useState } from "react";

function ChatRoom({ socket, user }) {
  const [messages, setMessages] = useState("");
  const [chat, setChat] = useState([]);

 

  const sendMessage = () => {
   
  };

  return (
    <div className="chat">
      <h3>Room: {user.room}</h3>

      <div className="messages">
        {chat.map((msg, i) => (
          <p key={i}>
            {msg.username ? (
              <>
                <b>{msg.username}</b>: {msg.message}
                <small> {msg.time}</small>
              </>
            ) : (
              <i>{msg.message}</i>
            )}
          </p>
        ))}
      </div>

      <input
        value={messages}
        onChange={(e) => setMessages(e.target.value)}
        placeholder="Type message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatRoom;

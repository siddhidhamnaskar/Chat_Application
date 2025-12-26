function JoinRoom() {

  const joinChat = () => {
   
  };

  return (
    <div className="login">
      <input id="username" placeholder="Username" />
      <input id="room" placeholder="Room Name" />
      <button onClick={joinChat}>Join Chat</button>
    </div>
  );
}

export default JoinRoom;

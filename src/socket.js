import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";

const socket = socketIOClient(ENDPOINT);
socket.on("disconnect", () => {
  console.log("disconnect"); // false
});

export default socket;

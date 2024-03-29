import openSocket from "socket.io-client"; // 소켓 클라이언트 호출

// socket url 정의
const socket = openSocket.connect("https://www.jacarand.com");

// mobx 상태관리로 넣어도 무방할듯 싶다..
const Socket = namespace => {
  // 소켓 네임스페이스 설정
  socket.nsp = namespace;
  // console.log("Socket namespace : ", socket.nsp);

  // 서버에 의해 연결이 끊어졌을때 연결 재시도
  socket.on("disconnect", reason => {
    if (reason === "io server disconnect") {
      socket.connect();
    }
  });

  return socket;
};

export default Socket;

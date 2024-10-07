const socket = io();

document.querySelector("#register").addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const photo = document.querySelector("#photo").value;

  const userData = { name, email, password, photo };

  socket.emit("new user", userData);
});

socket.on("update users", data => {
   data =  data.map(each => `<div>${each.name} - ${each.email}</div>`).join("")
  document.querySelector("#update").innerHTML = data;
});

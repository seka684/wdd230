const currentdate = new Date();
const options = { day: "numeric", month: "numeric", year: "numeric" };
document.getElementById("currentdate").textContent = new Date().toLocaleString(
  "en-US",
  options
);

document.getElementById("year").textContent = new Date().getFullYear();

const today = new Date();
const currenttime =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("currenttime").textContent = currenttime;

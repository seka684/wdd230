document.getElementById("year").textContent = new Date().getFullYear();

const lastmod = new Date(document.lastModified);
document.getElementById('lastmodified').innerHTML = lastmod.toLocaleString('en-GB');


let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const currentdate = new Date();

document.getElementById('today').textContent = currentdate.toLocaleDateString("en-US", options);
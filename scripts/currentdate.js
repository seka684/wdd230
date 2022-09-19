document.getElementById("year").textContent = new Date().getFullYear();

const lastmod = new Date(document.lastModified);
document.getElementById('lastmodified').innerHTML = lastmod.toLocaleString('en-GB');
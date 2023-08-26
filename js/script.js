let burguer = document.getElementById("burguer");
let btnLink = document.getElementById("nav-btn-links");
let acessDiv = document.getElementById("acess");

function menuOpenClose() {
  if (btnLink.style.display == "flex") {
    btnLink.style.display = "none";
    btnLink.classList.remove("config-mobile");
  } else {
    btnLink.style.display = "flex";
    btnLink.classList.add("config-mobile");
  }
}

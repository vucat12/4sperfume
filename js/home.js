const parallaxHeader = document.getElementById("header");
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallaxHeader.style.backgroundPositionY = offset * 0.7 + "px";
})

const openMenu = document.getElementById("menu");
openMenu.addEventListener("click", function () {
    let backgroundOfMenu = document.getElementById("backgroundOfMenu");
    backgroundOfMenu.style.opacity = "1";
    if (openMenu.innerText === "CLOSE") {
        openMenu.innerText = "MENU";
        backgroundOfMenu.style.opacity = "0";
    } else {
        openMenu.innerText = "CLOSE";
    }
})
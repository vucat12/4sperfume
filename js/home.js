const parallaxHeader = document.getElementById("header");
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallaxHeader.style.backgroundPositionY = offset * 0.7 + "px";
})
var myNav = document.getElementById('navigation');
var borderNav = document.querySelectorAll("#navigation > div")[1];
var spanNav = myNav.getElementsByTagName("div")[0].getElementsByTagName("span");
var logoNav = spanNav[1].getElementsByTagName("div")[0];
console.log(borderNav);
window.onscroll = function () {
    "use strict";
    if ($(document).scrollTop() >= 10) {
        if (myNav.getAttribute("class").search("scroll") < 0) {
            myNav.setAttribute("class", myNav.getAttribute("class").replace("navigation", "navigation-scroll"));
            borderNav.setAttribute("class", borderNav.getAttribute("class").replace("navigation", "navigation-scroll"));
            Array.prototype.forEach.call(spanNav, function (item) {
                item.setAttribute("class", item.getAttribute("class").replace("navigation", "navigation-scroll"));
            });
            logoNav.setAttribute("class", logoNav.getAttribute("class").replace("navigation", "navigation-scroll"));
        }
    } else {
        if (myNav.getAttribute("class").search("scroll") > 0) {
            myNav.setAttribute("class", myNav.getAttribute("class").replace("navigation-scroll", "navigation"));
            borderNav.setAttribute("class", borderNav.getAttribute("class").replace("navigation-scroll", "navigation"));
            Array.prototype.forEach.call(spanNav, function (item) {
                item.setAttribute("class", item.getAttribute("class").replace("navigation-scroll", "navigation"));
            });
            logoNav.setAttribute("class", logoNav.getAttribute("class").replace("navigation-scroll", "navigation"));
        }
    }
};

$(window).on('load', function () {
    $('#preloader-active').delay(3000).fadeOut('slow');
    $('body').delay(3000).css({
      'overflow': 'visible'
    });
  });
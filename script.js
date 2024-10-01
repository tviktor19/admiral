window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let scrollmenu = document.querySelector(".scrollmenu");

    let sticky = header.offsetHeight; // A header magasságát használjuk referencia pontként

    if (window.pageYOffset > sticky) {
        header.style.opacity = "0"; // A header eltűnik
        header.style.visibility = "hidden";
        scrollmenu.style.opacity = "1"; // A scrollmenu megjelenik
        scrollmenu.style.visibility = "visible";
    } else {
        header.style.opacity = "1"; // A header eltűnik
        header.style.visibility = "visible";
        scrollmenu.style.opacity = "0"; // A scrollmenu megjelenik
        scrollmenu.style.visibility = "hidden";
    }
});

let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.addEventListener("click", () => {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menuBtn.style.background = "none";
        menu.src = "images/close2.png";
    } else {
        sideNav.style.right = "-250px";
        menuBtn.style.background = "rgba(56, 163, 165, 0.9)";
        menu.src = "images/menu.png";
    }
});

document.addEventListener("click", event => {
    if (!sideNav.contains(event.target) && !menuBtn.contains(event.target)) {
        sideNav.style.right = "-250px";
        menuBtn.style.background = "rgba(56, 163, 165, 0.9)";
        menu.src = "images/menu.png";
    }
});

let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 1;
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${
            1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${
            1 - 0.2 * stt
        }) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
};
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
};

lightbox.option({
    albumLabel: "Kép %1 / %2",
});

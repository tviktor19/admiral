window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let scrollmenu = document.querySelector(".scrollmenu");

    let sticky = header.offsetHeight; // A header magasságát használjuk referencia pontként

    if (window.pageYOffset > sticky) {
        header.style.display = "none"; // A header eltűnik
        scrollmenu.style.display = "flex"; // A scrollmenu megjelenik
    } else {
        header.style.display = "block"; // A header visszajön
        scrollmenu.style.display = "none"; // A scrollmenu eltűnik
    }
});

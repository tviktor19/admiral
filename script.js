// window.addEventListener("scroll", function () {
//     let header = document.querySelector("header");
//     let scrollmenu = document.querySelector(".scrollmenu");

//     let sticky = header.offsetHeight; // A header magasságát használjuk referencia pontként

//     if (window.pageYOffset > sticky) {
//         header.style.display = "none"; // A header eltűnik
//         scrollmenu.style.display = "flex"; // A scrollmenu megjelenik
//     } else {
//         header.style.display = "block"; // A header visszajön
//         scrollmenu.style.display = "none"; // A scrollmenu eltűnik
//     }
// });

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

lightbox.option({
    albumLabel: "Kép %1 / %2",
});

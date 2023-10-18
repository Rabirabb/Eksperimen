// Menambahkan efek hover pada tautan menu
document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("header a");

    menuLinks.forEach(function (link) {
        link.addEventListener("mouseover", function () {
            link.style.color = "#7ba800"; // Warna saat dihover
        });

        link.addEventListener("mouseout", function () {
            link.style.color = "#fff"; // Warna teks asli
        });
    });
});

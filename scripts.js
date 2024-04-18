// Cambio de estilo del Nav en Scroll
let lastScrollTop = 0;

function onScrollBarHeader() {
    const headerBg = document.getElementById("header");
    const letters = document.querySelectorAll(".options-nav");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        headerBg.style.backgroundColor = "#FFFFFF";
        letters.forEach(function(letter) {
            letter.style.color = '#12448D';
        });
    } else {
        if (scrollTop <= 40) {
            headerBg.style.backgroundColor = "transparent";
            letters.forEach(function(letter) {
                letter.style.color = '#FFFFFF';
            });
        }
    }
    lastScrollTop = scrollTop;
}
window.addEventListener('scroll', onScrollBarHeader);
function onScrollBarHeader() {
    const headerBg = document.getElementById("header");
    const letters = document.querySelectorAll(".options-nav");
    const container = document.getElementById("container-nav");
    headerBg.style.backgroundColor = "#FFFFFF";
    container.style.marginBottom = "3px" 

    letters.forEach(function(letter) {
        letter.style.color = '#12448D'; // Cambia el color a rojo (puedes cambiar a tu preferencia)
    });
    console.log('Color Cambiado')
}

window.addEventListener('scroll', onScrollBarHeader);
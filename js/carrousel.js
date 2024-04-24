(function() {
    // On récupère les éléments nécessaires
    let carrousel = document.querySelector('.carrousel');
    let bouton = document.querySelector('.bouton__ouvrir');
    let galerie = document.querySelector('.galerie');
    let galerie__img = galerie.querySelectorAll('img');
    let carrousel__figure = document.querySelector('.carrousel__figure');

    // Création dynamique des images du carrousel et des boutons radio
    galerie__img.forEach((elm, index) => {
        creer_image_carrousel(index, elm);
        creer_radio_carrousel(index);
    });

    function creer_image_carrousel(index, elm) {
        console.log(elm.src);
        let carrousel__img = document.createElement('img');
        carrousel__img.src = elm.src;
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.dataset.index = index;
        carrousel__figure.appendChild(carrousel__img);
    }

    function creer_radio_carrousel(index) {
        let carrousel__form = document.querySelector('.carrousel__form');
        let carrousel__radio = document.createElement('input');
        carrousel__radio.type = 'radio';
        carrousel__radio.className = 'carrousel__radio';
        carrousel__radio.name = 'carrousel_radio';
        carrousel__radio.dataset.index = index;

        carrousel__form.appendChild(carrousel__radio);

        carrousel__radio.addEventListener('change', function() {
            let allImages = document.querySelectorAll('.carrousel__img');
            allImages.forEach(img => img.style.opacity = 0);
            allImages[index].style.opacity = 1;
        });
    }
document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('.carrousel__radio');
    const leftButton = document.querySelector('.carrousel__nav--left');
    const rightButton = document.querySelector('.carrousel__nav--right');

    let currentIndex = 0; // Track the current radio index

    function updateRadio(index) {
        radios.forEach(radio => radio.checked = false);
        radios[index].checked = true;
        radios[index].dispatchEvent(new Event('change'));
    }

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = radios.length - 1; // wrap around to the last radio
        }
        updateRadio(currentIndex);
    });

    rightButton.addEventListener('click', () => {
        if (currentIndex < radios.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // wrap around to the first radio
        }
        updateRadio(currentIndex);
    });

    // Initialize the first radio as checked
    if (radios.length > 0) {
        updateRadio(0);
    }
});
    // Écouteurs pour ouvrir et fermer le carrousel
    bouton.addEventListener('mousedown', function() {
        carrousel.classList.add('carrousel--ouvrir');
    });

    let boutonFermer = document.querySelector('.carrousel__x');
    boutonFermer.addEventListener('mousedown', function() {
        carrousel.classList.remove('carrousel--ouvrir');
    });
})();

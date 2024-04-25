(function() {
    // On récupère les éléments nécessaires
    let carrousel = document.querySelector('.carrousel');
    let bouton = document.querySelector('.bouton__ouvrir');
    let galerie = document.querySelector('.galerie');
    let galerie__img = galerie.querySelectorAll('img');
    let carrousel__figure = document.querySelector('.carrousel__figure');
    let currentIndex = 0; // To track the current index for the radio button and image

    // Functions to create each image and radio button for the carousel
    function creer_image_carrousel(index, elm) {
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
            allImages.forEach(img => {
                img.style.opacity = 0; // Hide all images
                img.style.display = 'none'; // Add display none for smooth transition
            });
            setTimeout(() => {
                allImages[index].style.display = 'block';
                allImages[index].style.opacity = 1;
            }, 10);
        });
    }

    // Adding images and radios to the carousel
    galerie__img.forEach((elm, index) => {
        creer_image_carrousel(index, elm);
        creer_radio_carrousel(index);
    });

    // Navigation function to update the active radio button and thus the image
  function updateRadio(index) {
    const allImages = document.querySelectorAll('.carrousel__img');
    const radios = document.querySelectorAll('.carrousel__radio');

    // First, make all images invisible
    allImages.forEach(img => {
        img.classList.remove('active');
    });

    // Then delay the visibility of the next image
    setTimeout(() => {
        allImages[index].classList.add('active');
    }, 150); // Delay slightly more than the transition time

    // Update radio buttons
    radios.forEach(radio => radio.checked = false);
    radios[index].checked = true;
}

    // Navigation buttons functionality
    const leftButton = document.querySelector('.carrousel__nav--left');
    const rightButton = document.querySelector('.carrousel__nav--right');

    leftButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : galerie__img.length - 1;
        updateRadio(currentIndex);
    });

    rightButton.addEventListener('click', () => {
        currentIndex = currentIndex < galerie__img.length - 1 ? currentIndex + 1 : 0;
        updateRadio(currentIndex);
    });

    // Button listeners to open and close the carousel
    bouton.addEventListener('mousedown', function() {
        carrousel.classList.add('carrousel--ouvrir');
    });

    let boutonFermer = document.querySelector('.carrousel__x');
    boutonFermer.addEventListener('mousedown', function() {
        carrousel.classList.remove('carrousel--ouvrir');
    });

    // Initialize the first radio as checked and visible
    if (galerie__img.length > 0) {
        updateRadio(0); // Ensures the first image is displayed on load
    }
})();

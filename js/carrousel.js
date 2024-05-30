(function() {
    let carrousel = document.querySelector('.carrousel');
    let galerie = document.querySelector('.galerie');
    let galerie__img = galerie.querySelectorAll('img');
    let carrousel__figure = document.querySelector('.carrousel__figure');
    let currentIndex = 0;

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
                img.classList.remove('active');
            });
            allImages[index].classList.add('active');
        });
    }

    galerie__img.forEach((elm, index) => {
        creer_image_carrousel(index, elm);
        creer_radio_carrousel(index);

        elm.addEventListener('click', () => {
            currentIndex = index;
            updateRadio(currentIndex);
            carrousel.classList.add('carrousel--ouvrir');
        });
    });

    function updateRadio(index) {
        const allImages = document.querySelectorAll('.carrousel__img');
        const radios = document.querySelectorAll('.carrousel__radio');

        allImages.forEach(img => {
            img.classList.remove('active');
        });

        setTimeout(() => {
            allImages[index].classList.add('active');
        }, 10);

        radios.forEach(radio => radio.checked = false);
        radios[index].checked = true;
    }

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

    let boutonFermer = document.querySelector('.carrousel__x');
    boutonFermer.addEventListener('mousedown', function() {
        carrousel.classList.remove('carrousel--ouvrir');
    });

    if (galerie__img.length > 0) {
        updateRadio(0);
    }
})();

(function(){

// On récupère le bouton pour ouvrir et le carrousel
    let carrousel = document.querySelector('.carrousel')
    let bouton = document.querySelector('.bouton__ouvrir')
    let galerie = document.querySelector('.galerie')
    let carrousel__figure = document.querySelector('.carrousel__figure')
    //creation dinamique d'une img du carrousel
    let carrousel__img = document.createElement('img')
    carrousel__img.classList.add('carrousel__img')
    /*recupere la premiere img de la galerie*/
    //let galerie__img = galerie.querySelector('img')
    //pour cree une colletion d'img de la galerie
    let galerie__img = galerie.querySelectorAll('img')
    console.log(galerie__img)

    for (const elm of galerie__img)
    {
        console.log(elm.src)
    }
    console.log("premiere img de la galerie ="+ galerie__img.src)
    carrousel__img.src= galerie__img.src
    console.log("premiere img de du carousel ="+ carrousel__img.src)
    carrousel__figure.appendChild(carrousel__img)
    console.log( carrousel__figure)
  
    // On ajoute un écouteur d'événement sur le bouton pour ouvrir le carrousel
    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')// permer de ouvrir le carrousel
    })
 
    // On récupère le bouton pour fermer le carrousel
    let boutonFermer = document.querySelector('.carrousel__x')
 
    // On ajoute un écouteur d'événement sur le bouton pour fermer le carrousel
    boutonFermer.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')// fermer le carrousel
    })

})()
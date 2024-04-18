(function(){

// On récupère le bouton pour ouvrir et le carrousel
    let carrousel = document.querySelector('.carrousel')
    let bouton = document.querySelector('.bouton__ouvrir')
 
    // On ajoute un écouteur d'événement sur le bouton pour ouvrir le carrousel
    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })
 
    // On récupère le bouton pour fermer le carrousel
    let boutonFermer = document.querySelector('.carrousel__x')
 
    // On ajoute un écouteur d'événement sur le bouton pour fermer le carrousel
    boutonFermer.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })
})()
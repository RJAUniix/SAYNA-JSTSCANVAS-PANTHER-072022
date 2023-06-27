// DOM catch
const container = document.querySelector('.container');
const flecheDroite = document.querySelector('#droite');
const flecheGauche = document.querySelector('#gauche');

// initialisation
let page = 0;

flecheDroite.addEventListener('click', () => {
    page-- ;
    afficherMasquer();
    container.style.transform = "translate("+ page*95 +"%)";
});

flecheGauche.addEventListener('click', () => {
    page++ ;
    afficherMasquer();
    container.style.transform = "translate("+ page*95 +"%)";
});

afficherMasquer();

// Affichage des flèches
function afficherMasquer() {
    if(page <= -4) {
        page = -3.5;
        flecheDroite.style.visibility = "hidden";
    }
    else if(page >= 0) {
        page = 0;
        flecheGauche.style.visibility = "hidden";
    }
    else {
        flecheGauche.style.visibility = "visible";
        flecheDroite.style.visibility = "visible";
    }
}
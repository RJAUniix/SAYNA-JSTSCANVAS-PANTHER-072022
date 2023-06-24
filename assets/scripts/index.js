// DOM catch
const container = document.querySelector('.container');
const flecheDroite = document.querySelector('#droite');
const flecheGauche = document.querySelector('#gauche');

// initialisation
let page = 0;
console.log(flecheDroite);

flecheDroite.addEventListener('click', () => {
    page-- ;
    container.style.transform = "translate("+ page*90 +"%)";
    afficherMasquer();
});

flecheGauche.addEventListener('click', () => {
    page++ ;
    container.style.transform = "translate("+ page*90 +"%)";
    afficherMasquer();
});

afficherMasquer();

// Affichage des flèches
function afficherMasquer() {
    if(page <= -4) {
        flecheDroite.style.visibility = "hidden";
    }
    else if(page == 0) {
        flecheGauche.style.visibility = "hidden";
    }
    else {
        flecheGauche.style.visibility = "visible";
        flecheDroite.style.visibility = "visible";
    }
}
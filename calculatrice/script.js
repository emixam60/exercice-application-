const info = document.querySelector('.infos');
const fenetre = document.getElementById('fenetre');

function valeur(resultat) {
    fenetre.value += resultat;
}

function calculer() {
    if (fenetre.value === "") {
        info.innerText = "Veuillez écrire un chiffre";
    } else {
        try {
            fenetre.value = eval(fenetre.value);
            info.innerText = "";
        } catch (error) {
            info.innerText = "Erreur dans l'expression";
            fenetre.value = "";
        }
    }
}

function supprimer() {
    fenetre.value = "";
}
// function appendToDisplay(value) {
//   document.getElementById('display').value += value;
// }

// function calculate() {
//   let calcul = document.getElementById('display').value;
//   let result;

//   try {
//     if (calcul.includes('/')) {
//       const parts = calcul.split('/');
//       for (let i = 1; i < parts.length; i++) {
//         if (parseFloat(parts[i]) === 0) {
//           throw new Error("Division par zéro");
//         }
//       }
//     }
    
//     result = eval(calcul);
//     document.getElementById('display').value = result;
//   } catch (error) {
//     document.getElementById('display').value = 'Erreur';
//   }
// }
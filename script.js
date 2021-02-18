function couleurH1() {
    var h1 = document.getElementById('blois');
    couleur = document.getElementById('inputCouleurH1').value;
    if (couleur =! '#000000') {
        h1.setAttribute('style', 'color : ' + couleur + ';');
        alert('La couleur ' + couleur + ' à bien été appliquée !')
    }
}
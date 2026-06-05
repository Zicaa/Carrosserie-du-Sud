// J'écoute l'évènement du DOM dans ma fenêtre de navigation
window.addEventListener('DOMContentLoaded', event => {
    // je déclare ma variable qui contient un tableau avec la classe de la liste de toutes mes horaires d'ouverture
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    // je récupère la nouvelle date et le jour actuel dans mon tableau grâce à la méthode getDay et j'y ajoute 
    // la classe today (texte orange) grâce à la méthode add
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
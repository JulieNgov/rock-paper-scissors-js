// Sélectionner tous les élèments importants qui vont être utiles
//pendant l'animation
PointsPlayer = document.querySelector(".points p")
Container = document.querySelector(".container h3")
playcontainer = document.querySelectorAll(".play")
ChoixIcons = document.querySelectorAll(".choix h2")
PlayerResultat = document.querySelector(".player h2")
ComputerResultat = document.querySelector(".computer h2")
TexteResultat = document.querySelector("h3")
p = '<i class="fa-regular fa-hand"></i>'
r = '<i class="fa-regular fa-hand-back-fist"></i>'
s = '<i class="fa-regular fa-hand-scissors  fa-rotate-90"></i>'




// Mettre invisible les mains joués (container du bas) au début du jeu
playcontainer.forEach((elements) => {
elements.classList.add("invisible")
 })


// Cliquer sur une option de main pour garder l'opacité 1 permanente
ChoixIcons.forEach((elements, choix) => {
    elements.addEventListener("click", (src) => {
        elements.classList.add("clic")

//Mettre mains joués invisibles à chaque fois que le joueur clique une main
//Pour rendre plus naturel entre chaque partie
        playcontainer.forEach((elements) => {
            elements.classList.add("invisible")
             })

// Dire au player d'attendre à chaque fois qu'il clique une main
        Container.innerHTML = 'Wait a bit... '
        Container.style.color = "black"


// Faire apparaitre les mains joués après avoir cliqué sur une main
//Timeout pour faire apparaître après 3secs

setTimeout(() => {
    playcontainer.forEach((elements) => {
        elements.classList.remove("invisible")
         })
}, 3000)

             // Lorsque l'on clique une nouvelle option, l'option précédente
// redevient transparant : Si choix ne correspond pas à l'élément
// sélectionné (choix2) et à l'élément2 alors on enlève le clic de "choix"
        ChoixIcons.forEach((element2, choix2) => {
            choix !== choix2 && element2.classList.remove("clic")
        })

// Changer l'icon lorsque le player clique sur un choix

            if(choix == '0') {
                 PlayerResultat.innerHTML = '<i class="fa-regular fa-hand"></i>'
            } else if(choix == '1' ) {
                 PlayerResultat.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>'
            } else {
                 PlayerResultat.innerHTML = '<i class="fa-regular fa-hand-scissors  fa-rotate-90"></i>'
            }

// Obtenir un nombre random entre 0 et 2
        function getRandom(max) {
            return Math.floor(Math.random() * 3);
          }

// Utiliser la fonction précédente pour randomiser le choix du computer
// SetTimeout pour obtenir le résultat après 3secs
    setTimeout(() => {        
        function ComputerRand() {
            let randomNum = getRandom(3);
            if (randomNum == 0) {
                return 'paper';
            } else if (randomNum == 1) {
                return 'rock';
            } else {
                return 'scissors';
            }
        }
        
// Faire une fonction pour changer l'icon du computer
        CompChoice = ComputerRand()
        if(CompChoice == 'paper') {
           ComputerResultat.innerHTML = '<i class="fa-regular fa-hand"></i>'
        } else if(CompChoice == 'rock' ) {
           ComputerResultat.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>'
        } else {
           ComputerResultat.innerHTML = '<i class="fa-regular fa-hand-scissors  fa-rotate-90"></i>'
        }


// Utiliser les résultats pour savoir si le joueur a gagné ou non

            if((PlayerResultat.innerHTML == r && ComputerResultat.innerHTML == r) || (PlayerResultat.innerHTML == p && ComputerResultat.innerHTML == p) || (PlayerResultat.innerHTML == s && ComputerResultat.innerHTML == s)) {
                Container.innerHTML = "It's a tie !"
                Container.style.color = "Purple"
            } else if ((PlayerResultat.innerHTML == p && ComputerResultat.innerHTML == r) || (PlayerResultat.innerHTML == r && ComputerResultat.innerHTML == s) || (PlayerResultat.innerHTML == s && ComputerResultat.innerHTML == p)) {
                Container.innerHTML = 'You win !'
                Container.style.color ="pink"
            } else {
                Container.innerHTML = 'You lose !'
                Container.style.color = "red"
            }

    }, 3000)

        
        
    })
})

var cases = document.getElementsByClassName('case');
var nombreAleatoire = []
let listescomplete = []
let level = 80


function GenererNombreAleatoire(maximum, minimum) {
    let nombre = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum

    return nombre
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
for (let index = 0; index < 81; index++) {
    cases[index].textContent =index +1
}
const initialiser = () => {
    nombreAleatoire = []
    for (let index = 0; index < 9; index++) {
        nombreAleatoire.push(index+1)
    }
    shuffle(nombreAleatoire)
    for (let index = 0; index < 9; index++) {
        cases[index].textContent = nombreAleatoire[index]
    }
    for (let index = 0; index < 3; index++) {
        nombreAleatoire.push(nombreAleatoire[index])
    }
    for (let index = 0; index < 3; index++) {
        nombreAleatoire.shift()
    }
    for (let index = 0; index < 9; index++) {
        cases[index + 9].textContent = nombreAleatoire[index]
    }
    for (let index = 0; index < 3; index++) {
        nombreAleatoire.push(nombreAleatoire[index])
    }
    for (let index = 0; index < 3; index++) {
        nombreAleatoire.shift()
    }
    for (let index = 0; index < 9; index++) {
        cases[index + 18].textContent = nombreAleatoire[index]
    }
    for (let index = 0; index < 2; index++) {
        nombreAleatoire.push(nombreAleatoire[index])
    }
    for (let index = 0; index < 2; index++) {
        nombreAleatoire.shift()
    }
    for (let index = 0; index < 9; index++) {
        cases[index + 27].textContent = nombreAleatoire[index]
    }

    for (let index = 0; index < 6; index++) {
        nombreAleatoire.push(nombreAleatoire[index])
    }
    for (let index = 0; index < 6; index++) {
        nombreAleatoire.shift()
    }
    for (let index = 0; index < 9; index++) {
        cases[index + 36].textContent = nombreAleatoire[index]
    }

    for (let index = 0; index < 6; index++) {
        nombreAleatoire.push(nombreAleatoire[index])
    }
    for (let index = 0; index < 6; index++) {
        nombreAleatoire.shift()
    }
    for (let index = 0; index < 9; index++) {
        cases[index + 45].textContent = nombreAleatoire[index]
    }
    for (let index = 0; index < 5; index++) {
        nombreAleatoire.push(nombreAleatoire[index])
    }
    for (let index = 0; index < 5; index++) {
        nombreAleatoire.shift()
    }
    for (let index = 0; index < 9; index++) {
        cases[index + 54].textContent = nombreAleatoire[index]
    }
    for (let index = 0; index < 6; index++) {
        nombreAleatoire.push(nombreAleatoire[index])
    }
    for (let index = 0; index < 6; index++) {
        nombreAleatoire.shift()
    }
    for (let index = 0; index < 9; index++) {
        cases[index + 63].textContent = nombreAleatoire[index]
    }

    for (let index = 0; index < 6; index++) {
        nombreAleatoire.push(nombreAleatoire[index])
    }
    for (let index = 0; index < 6; index++) {
        nombreAleatoire.shift()
    }
    for (let index = 0; index < 9; index++) {
        cases[index + 72].textContent = nombreAleatoire[index]
    }


    for (let index = 0; index < cases.length; index++) {
        listescomplete.push(cases[index].textContent)
    }



    for (let index = 0; index < level; index++) {
        let nbr = GenererNombreAleatoire(80, 0)
        cases[nbr].textContent = ''
    }

    for (let index = 0; index < cases.length; index++) {
        cases[choixCase].style.color = 'black'
        
    }
}

const niveau = () => {
    let niv = document.getElementById('niveau').value
    level = niv
}
//alert(parseInt(cases[0].id.replace("case",'')))
let toggle = false
let choixCase = 0
const recupIndex = (id) => {
    let case1 = document.getElementById(id)
    if (toggle) {
        if (choixCase == parseInt(id.replace('case', '')) - 1) {
            toggle = !toggle
            choixCase = 81
        } else {
            
        }
    } else {
        toggle = !toggle
    }
    choixCase = parseInt(id.replace('case', '')) - 1
    if (toggle) {
        for (let index = 0; index < cases.length; index++) {
            if (index == choixCase) {
                cases[index].style.borderColor = 'red'
                //alert('teste')
            } if(choixCase!=index) {
                cases[index].style.borderColor = 'rgb(96 165 250)'
            }
        }
    } else {
        
    }
    { toggle == true ? cases[choixCase].style.borderColor = 'red' : cases[choixCase].style.borderColor = 'black' }
    //alert(choixCase)
}

const ecrire = (valeur) => {
    if (toggle) {
        if (parseInt(cases[choixCase].textContent) != listescomplete[choixCase]) {
            //alert(listescomplete[choixCase])
            cases[choixCase].textContent = valeur
            cases[choixCase].style.color = 'green'
            if (parseInt(cases[choixCase].textContent) != listescomplete[choixCase]) {
                cases[choixCase].style.color = 'red'
            } else {
                cases[choixCase].style.color = 'green'
                //alert('teste')
            }
            verificationSiResolu()
        }
    }
}

let resolue = false
const verificationSiResolu = () => {
    
    for (let index = 0; index < cases.length; index++) {
        if (parseInt(cases[index].textContent) == listescomplete[index]) {
            resolue = true
        } else {
            resolue = false
        }
    }
}

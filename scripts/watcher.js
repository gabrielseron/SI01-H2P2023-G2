const joueurPseudo = document.querySelectorAll(".joueurPseudo")
const button = document.querySelector("button")

// RANDOM PSEUDO

for(let i=0; i<3; i++){

let pseudo = ["hack3r", "g33k", "cyb3r", "anonymØus", "fr3dØ_laManØ", "bØubØu", "bØgØ$$", "BØ$$", "NéØ", "MatriX", "MØrpheus"],
    numberPseudo=Math.floor(Math.random()* 8999+1000)

let pseudoJoueur = pseudo[Math.floor(Math.random()*pseudo.length)]+"_"+numberPseudo

joueurPseudo[i].innerText="@"+pseudoJoueur
}

// RANDOM COULEUR PSEUDO

let color = ["#ff0030","#fbe847","#69f93d","#ff8ff8","#b820ff","#f8a347","#20edff"]

for(let j=0; j<3; j++){
  let numeroRandom=Math.floor(Math.random()*color.length)
  if(joueurPseudo[j].style.color="black"){
    joueurPseudo[j].style.color="white"
  }
  joueurPseudo[j].style.color=color[numeroRandom]
  color.splice(numeroRandom)
}

// RANDOM NBR VIEWERS

const nombreViewers = document.querySelectorAll(".nombreViewers h1")

  let tabNomnbreViewers = []

for(let i=0; i<nombreViewers.length; i++){
  let nombreAlea=(Math.floor(Math.random()*8900+100))/100
  nombreViewers[i].innerText=nombreAlea+"K"
  tabNomnbreViewers.push(nombreAlea)
}


let variationViewers = setInterval(variation, 1000)

function variation(){
  for(let i=0; i<nombreViewers.length; i++){
    let nombrePlusMoins = (Math.floor(Math.random()*89+1))*(Math.floor(Math.random()*3-1))
    tabNomnbreViewers[i]=tabNomnbreViewers[i]+Math.floor((nombrePlusMoins/1000))
    nombreViewers[i].innerText=tabNomnbreViewers[i]+"K"
  }
}

const joueurPseudo = document.querySelectorAll(".joueurPseudo")
const defi=document.querySelectorAll(".containerDefi")
const defiBackground=document.querySelectorAll(".defiBackground")
const displayNoneDefi = document.querySelector(".displayNoneDefi")

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
    tabNomnbreViewers[i]=tabNomnbreViewers[i]+Math.floor((nombrePlusMoins/100))
    nombreViewers[i].innerText=tabNomnbreViewers[i]+"K"
  }
}

//CLICK ON PLAYER

const joueurLive = document.querySelectorAll(".joueurLive")
const joueurBackground = document.querySelectorAll(".joueurBackground")
const listeJoueurs = document.querySelector(".ListeJoueurs")

for(let i=0; i<joueurLive.length; i++){
  joueurLive[i].addEventListener(
    "click",
    function(){
      joueurBackground[0].style.transform="translateY(100px)"
      joueurBackground[0].style.transition="all 1s"
      joueurBackground[0].style.opacity="0"
      joueurBackground[1].style.transform="translateY(100px)"
      joueurBackground[1].style.transition="all 1s"
      joueurBackground[1].style.opacity="0"
      joueurBackground[2].style.transform="translateY(100px)"
      joueurBackground[2].style.transition="all 1s"
      joueurBackground[2].style.opacity="0"
      displayNoneDefi.style.display="block"
      /*for(let j=0; j<2; j++){
        defi[j].style.opacity="1"
        defi[j].style.transition="all 3s"
        defiBackground[j].style.opacity=".6"
        defiBackground[j].style.transition="all 3s"
      }*/
    }
  )
  joueurLive[0].addEventListener(
    "click",
    function(){
      joueurLive[1].style.transform="translateY(300px)"
      joueurLive[1].style.transition="all 1s"
      joueurLive[1].style.opacity="0"
      joueurLive[2].style.transform="translateY(300px)"
      joueurLive[2].style.transition="all 1s"
      joueurLive[2].style.opacity="0"
      joueurLive[0].style.backgroundColor="black"
      joueurLive[0].style.width="100%"
      joueurLive[0].style.margin="0px"
      joueurLive[0].style.transition="all 1s"
      listeJoueurs.style.justifyContent="flex-start"
      listeJoueurs.style.top="0%"
    }
  )

joueurLive[1].addEventListener(
  "click",
  function(){
    joueurLive[0].style.transform="translateY(300px)"
    joueurLive[0].style.transition="all 1s"
    joueurLive[0].style.opacity="0"
    joueurLive[0].style.display="none"
    joueurLive[2].style.transform="translateY(300px)"
    joueurLive[2].style.transition="all 1s"
    joueurLive[2].style.opacity="0"
    joueurLive[1].style.backgroundColor="black"
    joueurLive[1].style.width="100%"
    joueurLive[1].style.margin="0px"
    joueurLive[1].style.transition="all 1s"
    listeJoueurs.style.justifyContent="flex-start"
    listeJoueurs.style.top="0%"
  }
)

joueurLive[2].addEventListener(
  "click",
  function(){
    joueurLive[1].style.transform="translateY(300px)"
    joueurLive[1].style.transition="all 3s"
    joueurLive[1].style.opacity="0"
    joueurLive[0].style.transform="translateY(300px)"
    joueurLive[0].style.transition="all 3s"
    joueurLive[0].style.opacity="0"
    joueurLive[0].style.display="none"
    joueurLive[1].style.display="none"
    listeJoueurs.style.justifyContent="flex-start"
    joueurLive[2].style.backgroundColor="black"
    joueurLive[2].style.width="100%"
    joueurLive[2].style.margin="0px"
    joueurLive[2].style.transition="all 1s"
    listeJoueurs.style.top="0%"
  }
)
}

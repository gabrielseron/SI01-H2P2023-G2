const joueurPseudo = document.querySelectorAll(".joueurPseudo")
const defi=document.querySelectorAll(".defi")
const defiBackground=document.querySelectorAll(".defiBackground")
const displayNoneDefi = document.querySelector(".displayNoneDefi")
const containerGifDefi = document.querySelector(".containerGifDefi")
const containerMsgErreur = document.querySelector(".containerMsgErreur")
const espaceDefi = document.querySelector(".espaceDefi")
const gifDefiText=document.querySelector(".containerGifDefi h1")
const containerHeader=document.querySelector(".containerHeader")
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
  let nombreAlea=(Math.floor(Math.random()*89+1))
  nombreViewers[i].innerText=nombreAlea+"K"
  tabNomnbreViewers.push(nombreAlea)
}


let variationViewers = setInterval(variation, 1000)


function variation(){
  for(let i=0; i<nombreViewers.length; i++){
    let nombrePlusMoins = (Math.floor(Math.random()*4+1))*(Math.floor(Math.random()*2))
    tabNomnbreViewers[i]=(tabNomnbreViewers[i]*100+Math.floor(nombrePlusMoins))/100
    nombreViewers[i].innerText=(tabNomnbreViewers[i]).toFixed(2)+"K"

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
      joueurBackground[0].style.display="none"
      joueurBackground[1].style.display="none"
      joueurBackground[2].style.display="none"
      displayNoneDefi.style.display="block"
      espaceDefi.style.display="flex"
      containerHeader.style.opacity="1"
      containerHeader.style.transition="all 1s"
    }
  )
  joueurLive[0].addEventListener(
    "click",
    function(){
      joueurLive[1].style.display="none"
      joueurLive[2].style.display="none"
      joueurLive[0].style.backgroundColor="black"
      joueurLive[0].style.opacity=".7"
      joueurLive[0].style.width="50%"
      joueurLive[0].style.height="70px"
      joueurLive[0].style.margin="0px"
      joueurLive[0].style.transition="all 1s"
      listeJoueurs.style.justifyContent="center"
    }
  )

joueurLive[1].addEventListener(
  "click",
  function(){
    joueurLive[2].style.display="none"
    joueurLive[0].style.display="none"
    joueurLive[1].style.backgroundColor="black"
    joueurLive[1].style.opacity=".7"
    joueurLive[1].style.width="50%"
    joueurLive[1].style.height="70px"
    joueurLive[1].style.margin="0px"
    joueurLive[1].style.transition="all 1s"
    listeJoueurs.style.justifyContent="center"
  }
)

joueurLive[2].addEventListener(
  "click",
  function(){
    joueurLive[1].style.display="none"
    joueurLive[0].style.display="none"
    joueurLive[2].style.backgroundColor="black"
    joueurLive[2].style.opacity=".7"
    joueurLive[2].style.width="50%"
    joueurLive[2].style.height="70px"
    joueurLive[2].style.margin="0px"
    joueurLive[2].style.transition="all 1s"
    listeJoueurs.style.justifyContent="center"
  }
)
}

// CREDITS + PSEUDO JOUEUR

const credits = document.querySelector(".containerHeader h2")
const pseudoJoueur = document.querySelector(".containerHeader h1")

pseudoJoueur.innerText="@"+localStorage.pseudoJoueur

let creditsJoueur=300

credits.innerText="VOS CRÉDITS : "+creditsJoueur+"K"


// CHOIX DEFI

let kissDone=false,
    tatouageDone=false,
    chuteDone=false

for(let i=0; i<defi.length; i++){
  defi[0].addEventListener(
    "click",
    function(){
      containerGifDefi.classList.add("bgKiss")
      containerGifDefi.classList.remove("bgTatouage")
      containerGifDefi.classList.remove("bgChute")
      gifDefiText.style.display="none"
      if(kissDone==false){
        creditsJoueur=creditsJoueur-50
        credits.innerText="VOS CRÉDITS : "+Math.trunc(creditsJoueur)+"K"
        kissDone=true
      }
      defi[0].style.opacity=".2"
      defi[0].style.transition="all .3s"
      if(creditsJoueur==0){
        setTimeout(msgErreur, 4000)
        function msgErreur(){
          containerMsgErreur.style.display="block"
        }
      }
    }
  )
}

for(let i=0; i<defi.length; i++){
  defi[1].addEventListener(
    "click",
    function(){
      containerGifDefi.classList.add("bgTatouage")
      containerGifDefi.classList.remove("bgChute")
      containerGifDefi.classList.remove("bgKiss")
      gifDefiText.style.display="none"
      if(tatouageDone==false){
        creditsJoueur=creditsJoueur-100
        credits.innerText="VOS CRÉDITS : "+Math.trunc(creditsJoueur)+"K"
        tatouageDone=true
      }
      defi[1].style.opacity=".2"
      defi[1].style.transition="all .3s"
      if(creditsJoueur==0){
        setTimeout(msgErreur, 4000)
        function msgErreur(){
          containerMsgErreur.style.display="block"
        }
      }
    }
  )
}
for(let i=0; i<defi.length; i++){
  defi[2].addEventListener(
    "click",
    function(){
      containerGifDefi.classList.add("bgChute")
      containerGifDefi.classList.remove("bgTatouage")
      containerGifDefi.classList.remove("bgKiss")
      gifDefiText.style.display="none"
      if(chuteDone==false){
        creditsJoueur=creditsJoueur-150
        credits.innerText="VOS CRÉDITS : "+Math.trunc(creditsJoueur)+"K"
        chuteDone=true
      }
      defi[2].style.opacity=".2"
      defi[2].style.transition="all .3s"
      if(creditsJoueur==0){
        setTimeout(msgErreur, 4000)
        function msgErreur(){
          containerMsgErreur.style.display="block"
        }
      }
    }
  )
}

// CHAT AUTOMATIQUE


let botMsg=["Ahah trop drôle !","jpp","mdr","lol","ptdr","omg trop fort","oh mon dieu!","énorme","ajoutez moi sur snap","c'est truqué obligé","j'y crois pas","c'est vraiment réel ?","j'ai quand meme mis 3h à coder ça","eh mais c'est ma soeur !","wow truc de fou","faut trop que je le fasse aussi","j'ai peur"]
let chatAuto=setInterval(createDiv,Math.floor(Math.random()*4 +3)*1000)
let iMax=0
  function createDiv(){
    const chat=document.querySelector(".chat")
    let div = document.createElement('div')
    div.classList.add('message')
    let pseudo = ["hack3r", "g33k", "cyb3r", "anonymØus", "fr3dØ_laManØ", "bØubØu", "bØgØ$$", "BØ$$", "NéØ", "MatriX", "MØrpheus"],
        numberPseudo=Math.floor(Math.random()* 8999+1000)
    let pseudoJoueur = pseudo[Math.floor(Math.random()*pseudo.length)]+"_"+numberPseudo
    div.textContent=pseudoJoueur+" : "+botMsg[Math.floor(Math.random()*botMsg.length)]
    chat.appendChild(div)
   const divDecal=document.querySelectorAll(".chat div")
   for(let i=0; i<divDecal.length; i++){
    divDecal[i].style.bottom=iMax*20-[i]*20+20+"%"
  }
  iMax++
}

// CHAT UTILISATEUR

const msgUtilisateur=document.querySelector("#msgUtilisateur")
const msgUtilisateurButton=document.querySelector("#msgUtilisateurButton")

msgUtilisateurButton.addEventListener(
  "click",
  function(){
    const chat=document.querySelector(".chat")
    let div = document.createElement('div')
    div.classList.add('message')
    div.textContent=localStorage.pseudoJoueur+" : "+msgUtilisateur.value
    chat.appendChild(div)
    msgUtilisateur.value=""

   const divDecal=document.querySelectorAll(".chat div")
   for(let i=0; i<divDecal.length; i++){
    divDecal[i].style.bottom=iMax*20-[i]*20+40+"%"
  }
  iMax++
  }
)

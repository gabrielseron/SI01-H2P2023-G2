const imgWatcher = document.querySelector("#watcherIMG")
const imgPlayer = document.querySelector("#playerIMG")
const imgNerve = document.querySelector("#nerveIMG")
const txtChoisisRole = document.querySelector(".containerTxt h3")
const txtPresentation = document.querySelector("#txtPresentation")
const pseudoTxt = document.querySelector("#pseudoTxt")
const createAccountWatcher = document.querySelector(".createAccountWatcher")
const alertPannel = document.querySelector(".alertPannel")

imgWatcher.addEventListener(
  "mouseover",
  function(){
    imgWatcher.classList.remove("opacityOFF")
    imgWatcher.classList.add("opacityON")
    imgWatcher.style.transition="all .5s"
  }
)
imgWatcher.addEventListener(
  "mouseout",
  function(){
    imgWatcher.classList.remove("opacityON")
    imgWatcher.classList.add("opacityOFF")
  }
)

imgPlayer.addEventListener(
  "mouseover",
  function(){
    imgPlayer.classList.remove("opacityOFF")
    imgPlayer.classList.add("opacityON")
    imgPlayer.style.transition="all .5s"
  }
)
imgPlayer.addEventListener(
  "mouseout",
  function(){
    imgPlayer.classList.remove("opacityON")
    imgPlayer.classList.add("opacityOFF")
  }
)

imgWatcher.addEventListener(
  "click",
  function(){
    imgPlayer.style.transform="translateX(100%)"
    imgPlayer.style.opacity="0"
    imgPlayer.style.transition="all 1s"
    imgNerve.style.transform="translateX(100%)"
    imgNerve.style.opacity="0"
    imgNerve.style.transition="all 1s"
    imgWatcher.style.width="600px"
    imgWatcher.style.transform="translateY(-250%)translateX(30%)"
    imgWatcher.style.opacity="1"
    imgWatcher.style.transition="all 1s"
    txtChoisisRole.style.opacity="0"
    txtChoisisRole.style.transition="all 1s"
    txtPresentation.style.display="block"
    createAccountWatcher.style.opacity="1"
    createAccountWatcher.style.transition="all 4s"

    // Function Random Pseudo
    setTimeout(writePseudo, 2000)
    function writePseudo(){
      const inputPseudo = document.querySelector("#inputPseudo")

      let pseudo = ["hack3r", "g33k", "cyb3r", "anonymØus", "fr3dØ_laManØ", "bØubØu", "bØgØ$$", "BØ$$", "NéØ", "MatriX", "MØrpheus"],
          numberPseudo=Math.floor(Math.random()* 8999+1000)

      let pseudoJoueur = pseudo[Math.floor(Math.random()*pseudo.length+1)]+"_"+numberPseudo

      pseudoTxt.innerText="Voici votre pseudo généré = "+pseudoJoueur

      inputPseudo.setAttribute("placeholder", pseudoJoueur)
      inputPseudo.setAttribute("disabled", " ")
      pseudoTxt.style.display="block"
    }
  }
)

imgPlayer.addEventListener(
  "click",
  function(){
    alertPannel.style.display="block"
  }
)

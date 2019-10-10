const imgWatcher = document.querySelector("#watcherIMG")
const imgPlayer = document.querySelector("#playerIMG")
const imgNerve = document.querySelector("#nerveIMG")
const txtChoisisRole = document.querySelector(".containerTxt h3")
const txtPresentation = document.querySelector("#txtPresentation")
const pseudoTxt = document.querySelector("#pseudoTxt")
const createAccountWatcher = document.querySelector(".createAccountWatcher")
const alertPannel = document.querySelector(".containerAlertPannel")
const buttonOkAlertPannel = document.querySelector(".containerTxtAlertPannel h2")
const containerGif = document.querySelector(".containerGif")
const soundChoice=document.querySelector("#soundChoice")
const errorSound=document.querySelector("#errorSound")

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
    imgWatcher.style.transform="translateY(-200%)translateX(40%)"
    imgWatcher.style.opacity="1"
    imgWatcher.style.transition="all 1s"
    txtChoisisRole.style.opacity="0"
    txtChoisisRole.style.transition="all 1s"
    txtPresentation.style.display="block"
    createAccountWatcher.style.opacity="1"
    createAccountWatcher.style.transition="all 4s"
    containerGif.style.display="none"
    soundChoice.play()

    // Function Random Pseudo
    setTimeout(writePseudo, 2000)
    function writePseudo(){
      const inputPseudo = document.querySelector("#inputPseudo")

      let pseudo = ["hack3r", "g33k", "cyb3r", "anonymØus", "fr3dØ_laManØ", "bØubØu", "bØgØ$$", "BØ$$", "NéØ", "MatriX", "MØrpheus"],
          numberPseudo=Math.floor(Math.random()* 8999+1000)

      let pseudoJoueur = pseudo[Math.floor(Math.random()*pseudo.length)]+"_"+numberPseudo
      localStorage.setItem("pseudoJoueur", pseudoJoueur)
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
    errorSound.play()
  }
)

buttonOkAlertPannel.addEventListener(
  "click",
  function(){
    alertPannel.style.display="none"
  }
)

// GIF

imgWatcher.addEventListener(
  "mouseover",
  function(){
    containerGif.classList.remove("bgNerve")
    containerGif.classList.add("bgWatcher")
  }
)
imgWatcher.addEventListener(
  "mouseout",
  function(){
    containerGif.classList.add("bgNerve")
    containerGif.classList.remove("bgWatcher")
  }
)

imgPlayer.addEventListener(
  "mouseover",
  function(){
    containerGif.classList.remove("bgNerve")
    containerGif.classList.add("bgPlayer")
  }
)
imgPlayer.addEventListener(
  "mouseout",
  function(){
    containerGif.classList.add("bgNerve")
    containerGif.classList.remove("bgPlayer")
  }
)


// VIDEO

const videoContainer=document.querySelector(".containerVideo")
const video=document.querySelector("video")
const playButton=document.querySelector(".playButton img")
const skipButton=document.querySelector(".skipButton")
const msgReady=document.querySelector(".msgReady")
const buttonBack=document.querySelector(".buttonBack")
const buttonStart=document.querySelector("#buttonStartWatcherAccount")
const startButtonSound=document.querySelector("#startButtonSound")

buttonStart.addEventListener(
  "click",
  function(){
    videoContainer.style.display="flex"
    videoContainer.style.transition="all 1s"
    startButtonSound.play()
    setTimeout(extend, 20)
    function extend(){
      videoContainer.style.width="70%"
      videoContainer.style.height="70%"
    }
  }
)

videoPaused=true


video.addEventListener(
  "click",
  function(){
    if(videoPaused==true){
      video.play()
      videoPaused=false
      playButton.style.opacity="0"
      playButton.style.transition="all 1s"
    }
    else{
      video.pause()
      videoPaused=true
      playButton.style.opacity="1"
      playButton.style.transition="all .4s"
    }
  }
)

video.addEventListener(
  "mouseout",
  function(){
    skipButton.style.opacity="0"
    skipButton.style.transition="all 2s"
  }
)

video.addEventListener(
  "mouseover",
  function(){
    skipButton.style.opacity="1"
    skipButton.style.transition="all .3s"
  }
)

skipButton.addEventListener(
  "click",
  function(){
    msgReady.style.display="flex"
    video.pause()
  }
)

buttonBack.addEventListener(
  "click",
  function(){
    msgReady.style.display="none"
    video.play()
  }
)

// SKIP EXPERIENCE

const buttonSkipExperience=document.querySelector(".buttonSkipExperience")
const skipExperiencePannel=document.querySelector(".skipExperiencePannel")
const backButtonExperience=document.querySelector(".skipExperiencePannelChoice h4")

buttonSkipExperience.addEventListener(
  "click",
  function(){
    skipExperiencePannel.style.display="flex"
  }
)

backButtonExperience.addEventListener(
  "click",
  function(){
    skipExperiencePannel.style.display="none"
  }
)

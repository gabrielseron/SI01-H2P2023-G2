const imgWatcher = document.querySelector("#watcherIMG")
const imgPlayer = document.querySelector("#playerIMG")
const imgNerve = document.querySelector("#nerveIMG")
const txtChoisisRole = document.querySelector(".containerTxt h3")

let choiceRole=0
// 1 = Watcher
// 2 = Player


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
    choiceRole = 1
  }
)

imgPlayer.addEventListener(
  "click",
  function(){
    imgWatcher.style.transform="translateX(-100%)"
    imgWatcher.style.opacity="0"
    imgWatcher.style.transition="all 1s"
    imgNerve.style.transform="translateX(-100%)"
    imgNerve.style.opacity="0"
    imgNerve.style.transition="all 1s"
    imgPlayer.style.width="600px"
    imgPlayer.style.transform="translateX(-30%)translateY(-250%)"
    imgPlayer.style.opacity="1"
    imgPlayer.style.transition="all 1s"
    txtChoisisRole.style.opacity="0"
    txtChoisisRole.style.transition="all 1s"
    choiceRole = 2
  }
)

if(choiceRole==1){
  console.log("wsh")
  window.alert("watcher")
}
if(choiceRole==2){
  window.alert("player")
}

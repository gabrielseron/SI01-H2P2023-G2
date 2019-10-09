//const nextButton = document.querySelector('')
const txtInstructionsBlock = document.querySelector(".one")
const txtInstructions = document.querySelectorAll(".one p")
let x=0
let txtInterval = setInterval(writing, 2000)

  function writing(){
    txtInstructionsBlock.classList.remove('txtInstructions')
    if (x>0){
      txtInstructions[x-1].classList.remove('txtWriting')
      txtInstructions[x-1].classList.add('txtDisplay')
    }
    if (x<=txtInstructions.length-1){
    txtInstructions[x].classList.add('txtWriting')
    x++
    }
    else {
        clearInterval('txtInterval')
      }
    }


//nextButton.addEventListener('click',
//function(){

//})

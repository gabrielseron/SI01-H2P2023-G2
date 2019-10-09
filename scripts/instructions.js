

const txtinstructionsBlocks = document.querySelectorAll('.blackPad .txtInstructions')
const txtInstructionsONE = document.querySelectorAll('.one p')
const txtInstructionsTWO = document.querySelectorAll('.two p')
const txtInstructionsTHREE = document.querySelectorAll('.three p')
const txtInstructionsFOUR = document.querySelectorAll('.four p')
const txtInstructionsFIVE = document.querySelectorAll('.five p')
const txtInstructionsSIX = document.querySelectorAll('.six p')
const txtInstructionsSEVEN = document.querySelectorAll('.seven p')
let txtInstructionsItems = [txtInstructionsONE,txtInstructionsTWO,txtInstructionsTHREE,txtInstructionsFOUR,txtInstructionsFIVE,txtInstructionsSIX,txtInstructionsSEVEN]

//const buttons = document.querySelectorAll("")
//let y=0
//let nextButton = buttons[y]

//FONCTION POUR AFFICHER L'INSTRUCTION SUIVANTE

//nextButton.addEventListener('click',
//function(){
//    let txtInstructionsBlock = txtinstructionsBlocks[y]
//    let txtInstructions = txtInstructionsItems[y]
//    y++
//    txtInstructionsBlock.classList.add('txtInstructions')
//})



// FONCTION D'AFFICHAGE DE L'INVITE DE COMMANDE
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


  //FONCTION D'AFFICHAGE DES PAGES WEB

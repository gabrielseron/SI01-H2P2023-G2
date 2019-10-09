const txtinstructionsBlocks = document.querySelectorAll('.blackPad .txtInstructions')
const txtInstructionsONE = document.querySelectorAll('.one p')
const txtInstructionsTWO = document.querySelectorAll('.two p')
const txtInstructionsTHREE = document.querySelectorAll('.three p')
const txtInstructionsFOUR = document.querySelectorAll('.four p')
const txtInstructionsFIVE = document.querySelectorAll('.five p')
const txtInstructionsSIX = document.querySelectorAll('.six p')
const txtInstructionsSEVEN = document.querySelectorAll('.seven p')
const txtInstructionsHEIGHT = document.querySelectorAll('.height p')
const txtInstructionsNINE = document.querySelectorAll('.nine p')
let txtInstructionsItems = [txtInstructionsONE,txtInstructionsTWO,txtInstructionsTHREE,txtInstructionsFOUR,txtInstructionsFIVE,txtInstructionsSIX,txtInstructionsSEVEN,txtInstructionsHEIGHT,txtInstructionsNINE]

const buttons = document.querySelectorAll('body .button')
let x=0
let y=1
let nextButton = buttons[y-1]
let txtInstructionsBlock = txtinstructionsBlocks[0]
let txtInstructions = txtInstructionsItems[0]

const pages = document.querySelectorAll('body .pageDisplay')

console.log(buttons)
//FONCTION POUR AFFICHER L'INSTRUCTION SUIVANTE ET LA PAGE WEB

nextButton.addEventListener('click',
function(){
   txtInstructionsBlock.classList.add('txtInstructions')
   txtInstructionsBlock = txtinstructionsBlocks[y]
   txtInstructions = txtInstructionsItems[y]
   pages[y-1].classList.remove('pageDisplay')
   y++
   x=0
})



// FONCTION D'AFFICHAGE DE L'INVITE DE COMMANDE

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

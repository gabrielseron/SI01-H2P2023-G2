const joueurPseudo = document.querySelectorAll(".joueurPseudo")



for(let i=0; i<3; i++){

let pseudo = ["hack3r", "g33k", "cyb3r", "anonymØus", "fr3dØ_laManØ", "bØubØu", "bØgØ$$", "BØ$$", "NéØ", "MatriX", "MØrpheus"],
    numberPseudo=Math.floor(Math.random()* 8999+1000)

let pseudoJoueur = pseudo[Math.floor(Math.random()*pseudo.length)]+"_"+numberPseudo

joueurPseudo[i].innerText="@"+pseudoJoueur

}

let color = ["red","blue","yellow","green","pink","purple","grey","orange","light blue"]

for(let j=0; j<3; j++){
  let numeroRandom=Math.floor(Math.random()*color.length)
  if(joueurPseudo[j].style.color="black"){
    joueurPseudo[j].style.color="white"
  }
  joueurPseudo[j].style.color=color[numeroRandom]
  color.splice(numeroRandom)
}

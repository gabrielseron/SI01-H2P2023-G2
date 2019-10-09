
let slide=document.getElementById('resume')
let slide1=document.getElementById('second_charactere')
let slide2=document.getElementById('first_charactere')
let slide3=document.getElementById('image_gif')
let nerve_title=document.getElementById('nerve_title')
let bluray=document.getElementById('bluray')
let button=document.getElementById('button')
let background=document.querySelectorAll('body')

console.log(background);


    window.addEventListener(
     "scroll",
     function (){
       const scrolled = window.scrollY
       if(scrolled<200){
         resume.style.opacity='0'
         resume.style.transform= "translateX(-300px)";
         first_charactere.style.opacity='0'
         second_charactere.style.opacity='0'

       }
       if(scrolled>700){
         resume.style.opacity="1"
         resume.style.transition="all 1s"
         resume.style.transform= "translateX(150px)";

         first_charactere.style.opacity='0'
         first_charactere.style.transform= "translateX(-300px)";
         second_charactere.style.opacity='0'
         second_charactere.style.transform= "translateX(1000px)";
       }

       if(scrolled>1700){
         resume.style.opacity='0'
         resume.style.transform= "translateX(-300px)";

         first_charactere.style.opacity='1'
         first_charactere.style.transition="all 1s"
         first_charactere.style.transform="translateX(150px)"
         second_charactere.style.opacity='1'
         second_charactere.style.transition="all 1s"
         second_charactere.style.transform= "translateX(-200px)";
       }
       if(scrolled>2900){

         first_charactere.style.opacity='0'
         first_charactere.style.transform="translateX(-300px)"
         second_charactere.style.opacity='0'
         second_charactere.style.transform= "translateX(1000px)";

       }
       /*
       if(scrolled>3800){
         bluray.style.opacity='1'
         bluray.style.transition="all 1s"
         bluray.style.transform= "translateY(30px)";
         button.style.opacity='1'
         button.style.transition="all 1s"
         button.style.transform= "translateY(30px)";

       }

       if(scrolled<3000){
         bluray.style.opacity='0'
         bluray.style.transform= "translateY(300px)";
         button.style.opacity='0'
         button.style.transform= "translateY(300px)";
       }

*/

     }
   )

   button.addEventListener("mouseover", function(){
     button.style.backgroundColor="white"
     button.style.color="black"
   })

   button.addEventListener("mouseout", function(){
     button.style.backgroundColor="initial";
     button.style.color= "white";
   })


let casting=document.getElementById('casting_description')
let video=document.getElementById('video')
let replay=document.getElementById('replay')
let scroll_top=document.getElementById('scroll_top')
let critique= document.getElementById('bubble')


scroll_top.addEventListener('click',function(){
window.scrollTo({ top: 0, behavior: 'smooth' })

  })



replay.addEventListener("mouseover",function(){
  replay.style.backgroundColor='blue'
})

replay.addEventListener("mouseout",function(){
  replay.style.backgroundColor='red'
})


    window.addEventListener(
     "scroll",
     function (){
       const scrolled = window.scrollY
       if(scrolled<250){
         resume.style.opacity='0'
         resume.style.transform= "translateX(-500px)";
         first_charactere.style.opacity='0'
         second_charactere.style.opacity='0'

       }
       if(scrolled>300){
         resume.style.opacity="1"
         resume.style.transition="all 1s"
         resume.style.transform= "translateX(150px)";

         first_charactere.style.opacity='0'
         first_charactere.style.transform= "translateX(-300px)";
         second_charactere.style.opacity='0'
         second_charactere.style.transform= "translateX(1000px)";
         console.log(scrolled);
       }

       if(scrolled>1000){
         resume.style.opacity='0'
         resume.style.transform= "translateX(-300px)";

         first_charactere.style.opacity='1'
         first_charactere.style.transition="all 1s"
         first_charactere.style.transform="translateX(150px)"
         casting.style.opacity='0'
         casting.style.transform="translateX(-150px)"
         video.style.opacity='0'
         video.style.transform="translateX(200px)"
       }

       if(scrolled>1200){
         second_charactere.style.opacity='1'
         second_charactere.style.transition="all 1s"
         second_charactere.style.transform= "translateX(-200px)";
         third_charactere.style.opacity='0'
         third_charactere.style.transition="all 1s"
         third_charactere.style.transform= "translateX(-300px)";
       }
       if(scrolled>1400){
         third_charactere.style.opacity='1'
         third_charactere.style.transition="all 1s"
         third_charactere.style.transform= "translateX(100px)";
       }




       if(scrolled>1900){

         first_charactere.style.opacity='0'
         first_charactere.style.transform="translateX(-300px)"
         second_charactere.style.opacity='0'
         second_charactere.style.transform= "translateX(1000px)";
         third_charactere.style.opacity='0'
         third_charactere.style.transform= "translateX(-300px)";
         casting.style.opacity='1'
         casting.style.transition="all 1s"
         casting.style.transform="translateX(150px)"
         video.style.opacity='1'
         video.style.transition="all 1s"
         video.style.transform="translateX(-50px)"
         critique.style.opacity='0'
         critique.style.transition="all 1s"
         critique.style.transform="translateY(350px)"

       }
if(scrolled>2800){
  casting.style.opacity='1'
  casting.style.transition="all 1s"
  casting.style.transform="translateX(-350px)"
  video.style.opacity='1'
  video.style.transition="all 1s"
  video.style.transform="translateX(850px)"
  critique.style.opacity='1'
  critique.style.transition="all 1s"
  critique.style.transform="translateY(-20px)"


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
/*
   button.addEventListener("mouseover", function(){
     button.style.backgroundColor="white"
     button.style.color="black"
   })

   button.addEventListener("mouseout", function(){
     button.style.backgroundColor="initial";
     button.style.color= "white";
   })
   */

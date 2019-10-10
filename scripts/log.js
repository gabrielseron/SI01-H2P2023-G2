progressBarUse()

function progressBarUse() {
  const progressInterval = setInterval(progressUp, 15)

  function progressUp() {
    let progress = document.querySelector('#myBar').getAttribute('value')
    console.log(progress)
    progress++
    document.querySelector('#myBar').setAttribute('value', progress)
    document.querySelector('.percent').innerHTML = progress
    if (progress == 100) {
      document.querySelector('#myBar').classList.add('hidden');
      document.querySelector('.percent').classList.add('hidden');
      document.querySelector('.percent2').classList.add('hidden');
      clearInterval(progressInterval)
      document.querySelector('#txtLog').classList.remove('hidden');
      document.querySelector('.go').classList.remove('hidden');
    }
  }

}

document.querySelector('.go').style.cursor = "pointer";


document.querySelector('.go').addEventListener('click', function() {
  document.querySelector('.page1').classList.add('hidden');
  document.querySelector('.txt1').classList.remove('hidden');
  document.querySelector('.player').classList.remove('hidden');
  let x = setTimeout(displayTxt2, 3000)

  function displayTxt2() {
    document.querySelector('.txt1').classList.add('hidden');
    document.querySelector('.txt2').classList.remove('hidden');
  }

  let y = setTimeout(displayTxt3, 6000)

  function displayTxt3() {
    document.querySelector('.txt2').classList.add('hidden');
    document.querySelector('.txt3').classList.remove('hidden');
    clearTimeout(displayTxt2)
    clearTimeout(displayTxt3)
  }

})
document.querySelector('.player').style.cursor = "pointer";
document.querySelector('.player').addEventListener('click', function() {
  document.querySelector('.page2').classList.add('hidden');
  document.querySelector('.ftext1').classList.remove('hidden');
  document.querySelector('.next').classList.remove('hidden');

  let a = setTimeout(displayFtxt2, 3000)

  function displayFtxt2() {
    document.querySelector('.ftext1').classList.add('hidden');
    document.querySelector('.ftext2').classList.remove('hidden');
  }

  let b = setTimeout(displayFtxt3, 6000)

  function displayFtxt3() {
    document.querySelector('.ftext2').classList.add('hidden');
    document.querySelector('.ftext3').classList.remove('hidden');
  }

  let c = setTimeout(displayFtxt4, 8000)

  function displayFtxt4() {
    document.querySelector('.ftext3').classList.add('hidden');
    document.querySelector('.ftext4').classList.remove('hidden');
  }

  let d = setTimeout(displayFtxt5, 11000)

  function displayFtxt5() {
    document.querySelector('.ftext4').classList.add('hidden');
    document.querySelector('.ftext5').classList.remove('hidden');
  }

  let e = setTimeout(displayFtxt6, 14000)

  function displayFtxt6() {
    document.querySelector('.ftext5').classList.add('hidden');
    document.querySelector('.ftext6').classList.remove('hidden');
  }

  let f = setTimeout(displayFtxt7, 16000)

  function displayFtxt7() {
    document.querySelector('.ftext6').classList.add('hidden');
    document.querySelector('.ftext7').classList.remove('hidden');
  }

  let g = setTimeout(displayFtxt8, 18000)

  function displayFtxt8() {
    document.querySelector('.ftext7').classList.add('hidden');
    document.querySelector('.ftext8').classList.remove('hidden');
  }
})

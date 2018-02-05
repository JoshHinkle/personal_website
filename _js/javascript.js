
/*
setTimeout("document.bgColor='white'", 1000) ;
setTimeout("document.bgColor='lightpink'", 1500); 
setTimeout("document.bgColor = 'pink'", 2000) ;
setTimeout("document.bgColor = 'deeppink'", 2500); 
setTimeout("document.bgColor = 'red'", 3000) ;
setTimeout("document.bgColor = 'tomato'", 3500); 
setTimeout("document.bgColor = 'darkred'", 4000);
*/

var e = document.getElementById("first-intro-typing-div");
e.addEventListener("animationstart", listener, false);
e.addEventListener("animationend", listener, false);

function listener(e){
  switch(e.type) {
    case "animationend":
      
      e.className = '';
      setTimeout(addSecondAnimation,1000);
      break;
  

  }
}

function addSecondAnimation(){
  e.classList.remove('typewriter');
  var secondDiv = document.getElementById("second-intro-typing-div");
  secondDiv.className = "typewriter";
  
  //secondDiv.style.animation = "typing 3.5s steps(29, end), blink-caret .5s step-end infinite";
  var secondText = document.getElementById("second-intro-typing-txt");

  secondText.style.textIndent = '0px'
  secondText.innerHTML = "My name is Josh.";

}

window.sr = ScrollReveal();
    sr.reveal('.container');
    sr.reveal('.category-text');
    sr.reveal('.experience-title');
    sr.reveal('.experience-subtitle');
    sr.reveal('.experience-description');
    sr.reveal('.experience-title');

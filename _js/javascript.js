
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
e.addEventListener("animationend", function(){
  setTimeout(addSecondAnimation,1200);
  }, false);


var f = document.getElementById("second-intro-typing-div");
f.addEventListener("animationend", function(){
  setTimeout(finishSecondAnimation,1500);
}, false);



function finishSecondAnimation(){
  f.classList.remove('typewriter');
}

function addSecondAnimation(){
  e.classList.remove('typewriter');
 
  f.className = "typewriter";
  
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

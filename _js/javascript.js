// Yes, I did this in vanilla JS. NO REGRETS 

var e = document.getElementById("first-intro-typing-div");
e.addEventListener("animationend", function(){
  setTimeout(addSecondAnimation,1200);
  }, false);


var f = document.getElementById("second-intro-typing-div");
f.addEventListener("animationend", function(){
  setTimeout(finishSecondAnimation,2500);
}, false);

function finishSecondAnimation(){
  f.classList.remove('typewriter');
  unfade(document.getElementById('arrowVertDiv'))
}

function addSecondAnimation(){
  e.classList.remove('typewriter');
  f.className = "typewriter";
  var secondText = document.getElementById("second-intro-typing-txt");
  secondText.style.textIndent = '0px'
  secondText.innerHTML = "My name is Josh.";
}

function unfade(element) {
    var op = 0.02;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

window.sr = ScrollReveal();
    sr.reveal('.container');
    sr.reveal('.category-text');
    sr.reveal('.experience-title');
    sr.reveal('.experience-subtitle');
    sr.reveal('.experience-description');
    sr.reveal('.experience-title');



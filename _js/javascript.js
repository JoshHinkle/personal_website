// Yes, I did this in vanilla JS. NO REGRETS

var e = document.getElementById("first-intro-typing-div");
var f = document.getElementById("second-intro-typing-div");
var splashSkipped = false;

function skipSplash() {
  if (splashSkipped) return;
  splashSkipped = true;

  // Remove animations and show final state immediately
  e.classList.remove('typewriter');
  f.classList.remove('typewriter');

  var firstText = document.querySelector("#first-intro-typing-div .intro-typing-txt");
  var secondText = document.getElementById("second-intro-typing-txt");

  firstText.style.animation = 'none';
  firstText.style.borderRight = 'none';

  secondText.style.textIndent = '0px';
  secondText.innerHTML = "My name is Josh.";
  secondText.style.animation = 'none';
  secondText.style.borderRight = 'none';

  var arrow = document.getElementById('arrowVertDiv');
  arrow.style.display = 'block';
  arrow.style.opacity = 1;
}

// Skip on click or scroll
document.querySelector('.splash').addEventListener('click', skipSplash);
document.querySelector('.splash').style.cursor = 'pointer';

e.addEventListener("animationend", function(){
  setTimeout(addSecondAnimation, 500);
}, false);

f.addEventListener("animationend", function(){
  setTimeout(finishSecondAnimation, 500);
}, false);

function finishSecondAnimation(){
  if (splashSkipped) return;
  f.classList.remove('typewriter');
  unfade(document.getElementById('arrowVertDiv'))
}

function addSecondAnimation(){
  if (splashSkipped) return;
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

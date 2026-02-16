// Yes, I did this in vanilla JS. NO REGRETS

var e = document.getElementById("first-intro-typing-div");
var splashSkipped = false;

function skipSplash() {
  if (splashSkipped) return;
  splashSkipped = true;

  e.classList.remove('typewriter');

  var firstText = document.querySelector("#first-intro-typing-div .intro-typing-txt");
  firstText.style.animation = 'none';
  firstText.style.borderRight = 'none';

  document.getElementById('arrowVertDiv').classList.add('show');
}

// Skip on click
document.querySelector('.splash').addEventListener('click', skipSplash);
document.querySelector('.splash').style.cursor = 'pointer';

// Show arrow after typing animation completes (~1s typing + 0.5s pause)
setTimeout(function() {
  if (splashSkipped) return;
  e.classList.remove('typewriter');
  document.getElementById('arrowVertDiv').classList.add('show');
}, 5000);

window.sr = ScrollReveal();
    sr.reveal('.container');
    sr.reveal('.category-text');
    sr.reveal('.experience-title');
    sr.reveal('.experience-subtitle');
    sr.reveal('.experience-description');
    sr.reveal('.experience-title');

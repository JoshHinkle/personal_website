// Yes, I did this in vanilla JS. NO REGRETS

(function() {
  // --- Splash typewriter ---
  var typing = document.getElementById('first-intro-typing-div');
  var splashSkipped = false;

  function skipSplash() {
    if (splashSkipped) return;
    splashSkipped = true;
    typing.classList.remove('typewriter');
    var text = typing.querySelector('.intro-typing-txt');
    text.style.animation = 'none';
    text.style.borderRight = 'none';
    document.getElementById('arrowVertDiv').classList.add('show');
  }

  var splash = document.querySelector('.splash');
  splash.addEventListener('click', skipSplash);
  splash.style.cursor = 'pointer';

  // Show arrow after typing (2s) + caret blink (3s)
  setTimeout(function() {
    if (splashSkipped) return;
    typing.classList.remove('typewriter');
    document.getElementById('arrowVertDiv').classList.add('show');
  }, 5000);

  // --- Sticky nav + arrow hide/show ---
  var nav = document.getElementById('main-nav');
  var arrow = document.getElementById('arrowVertDiv');
  var arrowHidden = false;
  var splashHeight = splash.offsetHeight;

  window.addEventListener('scroll', function() {
    // Sticky nav
    if (window.scrollY > splashHeight) {
      nav.classList.add('visible');
    } else {
      nav.classList.remove('visible');
    }
    // Arrow fade out when scrolled past, fade in at top
    if (arrow) {
      var arrowBottom = arrow.offsetTop + arrow.offsetHeight;
      if (window.scrollY > arrowBottom && !arrowHidden) {
        arrowHidden = true;
        arrow.style.transition = 'opacity 0.5s ease';
        arrow.style.opacity = '0';
      } else if (window.scrollY === 0 && arrowHidden) {
        arrowHidden = false;
        arrow.style.transition = 'opacity 0.5s ease';
        arrow.style.opacity = '1';
      }
    }
  });

  // --- Smooth scroll for nav links ---
  var links = nav.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // --- Lightbox ---
  var daisyLink = document.getElementById('daisy-link');
  var lightbox = document.getElementById('daisy-lightbox');

  if (daisyLink && lightbox) {
    daisyLink.addEventListener('click', function(e) {
      e.preventDefault();
      lightbox.classList.add('active');
    });
    lightbox.addEventListener('click', function() {
      lightbox.classList.remove('active');
    });
  }

  // --- Scroll reveal (IntersectionObserver) ---
  var revealElements = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    revealElements.forEach(function(el) {
      el.classList.add('revealed');
    });
  }
})();

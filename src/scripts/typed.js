import Typed from 'typed.js';

function typed() {
  const typed = new Typed('#typed', {
    strings: ['a Computer Science student', 'an Aspiring Software Engineer'],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true,
    loopCount: 3,
    smartBackspace: true,
    showCursor: false,
  });
}

typed();


document.addEventListener('astro:after-swap', typed);
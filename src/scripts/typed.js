import Typed from 'typed.js';

function initTyped() {
  console.log("Running Typed...")
  const typed = new Typed('#typed', {
      strings: ['a Computer Science student', 'an Aspiring Software Engineer'],
      typeSpeed: 20,
      backSpeed: 10,
      loop: true,
      loopCount: 3,
      smartBackspace: true,
      showCursor: false,
  });
}
initTyped();
// Also, call it once to handle the case when 'astro:after-swap' event has already occurred
document.addEventListener('astro:after-swap', initTyped);
import Typed from 'typed.js';

function initTyped() {
    let typedInitialized = false;

    if (!typedInitialized) {
        const typed = new Typed('#typed', {
            strings: ['a Computer Science student', 'an Aspiring Software Engineer'],
            typeSpeed: 50,
            backSpeed: 20,
            loop: true,
            loopCount: 3,
            smartBackspace: true,
            showCursor: false,
        });

    typedInitialized = true; // Set the flag to true after initialization
    }
}
function typed(){
  document.addEventListener('DOMContentLoaded', function() {
    // Wait for '#typed' to be present
    var typedCheck = setInterval(function() {
        var typedElement = document.querySelector('#typed');
        if (typedElement) {
            clearInterval(typedCheck);
            // '#typed' is present, call the initTyped function
            initTyped();
        }
    }, 100); // Check every 100 milliseconds
  });
}

// Also, call it once to handle the case when 'astro:after-swap' event has already occurred
document.addEventListener('astro:after-swap', typed);
typed();

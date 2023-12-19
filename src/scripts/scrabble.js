
function initScrabble() {
    let letters = "ABCDEFGHILKLNOPQRSTUIIIIYZ";
    letters = letters.toLowerCase();

    let interval = null;

    document.querySelector("#scrabble").onmouseover = event => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };
}

initScrabble();
// Also, call it once to handle the case when 'astro:after-swap' event has already occurred
document.addEventListener('astro:after-swap', initScrabble);

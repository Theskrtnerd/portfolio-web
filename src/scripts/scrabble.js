function scrabble(){
    let letters = "ABCDEFGHIJKLNOPQRSTUVIIXYZ";
    letters = letters.toLowerCase();
  
    let interval = null;
  
    document.querySelector("#scrabble").onmouseover = event => {  
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    }
  }
  
  scrabble();
  
  
  document.addEventListener('astro:after-swap', scrabble);
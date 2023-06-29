let element = document.querySelector('.loader'); 
         function fadeOut(el) {
            var opacity = 1; // Initial opacity
            var interval = setInterval(function() {
               if (opacity > 0) {
                  opacity -= 0.001;
                  el.style.opacity = opacity;
               } else {
                  clearInterval(interval); // Stop the interval when opacity reaches 0
                  el.style.display = 'none'; // Hide the element
               }
            }, 10);
         }
         fadeOut(element);
         


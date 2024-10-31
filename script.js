let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});


function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
window.addEventListener('load', function() {
    const progressBars = document.querySelectorAll('.progreso');

    progressBars.forEach(bar => {
        const skillValue = bar.getAttribute('data-skill'); // Obtiene el valor de habilidad
        bar.style.width = skillValue; // Establece el ancho de la barra según el valor
    });
});



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

 





window.onload = function() {
            function fireworksConfetti() {
                const duration = 5000;
                const animationEnd = Date.now() + duration;
                const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

                function randomInRange(min, max) {
                    return Math.random() * (max - min) + min;
                }

                const interval = setInterval(function() {
                    const timeLeft = animationEnd - Date.now();

                    if (timeLeft <= 0) {
                        return clearInterval(interval);
                    }

                    const particleCount = 50 * (timeLeft / duration);

                    // Lanza confeti desde la parte inferior, como fuegos artificiales
                    confetti(Object.assign({}, defaults, {
                        particleCount,
                        origin: { x: randomInRange(0.1, 0.3), y: 1 }
                    }));
                    confetti(Object.assign({}, defaults, {
                        particleCount,
                        origin: { x: randomInRange(0.7, 0.9), y: 1 }
                    }));
                }, 250);
            }

            fireworksConfetti();
        };



// Seleccionar el botón y el reproductor de audio
const playButton = document.getElementById('play-button');
const audioPlayer = document.getElementById('audio-player');

// Controlar el estado de reproducción
playButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pausar'; // Cambiar el texto del botón
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Reproducir'; // Volver a cambiar el texto del botón
    }
});

















const cardsContainer = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');
const cardWidth = 220; // Ancho de cada tarjeta (incluye margen)
let offset = 0;
let autoScroll;

// Función para mover las tarjetas automáticamente
function startAutoScroll() {
  autoScroll = setInterval(() => {
    offset -= cardWidth;
    if (Math.abs(offset) >= cardsContainer.scrollWidth / 2) {
      offset = 0;
    }
    cardsContainer.style.transform = `translateX(${offset}px)`;
  }, 2000);
}

// Función para detener el desplazamiento automático
function stopAutoScroll() {
  clearInterval(autoScroll);
}

// Evento para el botón "Siguiente"
document.getElementById('nextBtn').addEventListener('click', () => {
  stopAutoScroll();
  offset -= cardWidth;
  if (Math.abs(offset) >= cardsContainer.scrollWidth / 2) {
    offset = 0;
  }
  cardsContainer.style.transform = `translateX(${offset}px)`;
  startAutoScroll();
});

// Evento para el botón "Anterior"
document.getElementById('prevBtn').addEventListener('click', () => {
  stopAutoScroll();
  offset += cardWidth;
  if (offset > 0) {
    offset = -(cardsContainer.scrollWidth / 2 - cardWidth);
  }
  cardsContainer.style.transform = `translateX(${offset}px)`;
  startAutoScroll();
});

// Iniciar el desplazamiento automático
startAutoScroll();

// Detener el desplazamiento automático al tocar la pantalla
window.addEventListener('touchstart', () => {
  stopAutoScroll();
});

// Agrega animación cuando el usuario desplaza hacia abajo
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) { // Ajusta el valor según la posición deseada
    cards.forEach(card => {
      card.classList.add('animated');
    });
  }
});



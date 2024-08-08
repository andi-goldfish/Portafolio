
let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

//una acccion tiene parentesis despues del nombre de la accion
//a veces tiene el operador punto

typewriter
    .pauseFor(1500) //ms
    .typeString('Hola, soy Andrea López')
    .pauseFor(300)
    .deleteAll()
    .typeString('Desarrolladora Front-end Jr.')
    .pauseFor(1000)
    .start();



let audioElement; // Variable para almacenar el objeto Audio
const mainElement = document.querySelector('main'); // Seleccionar la etiqueta <main>
mainElement.addEventListener('click', function () {

    if (!audioElement) {
        audioElement = new Audio('assets/music/under.mp3');
        audioElement.volume = 0.1;
    }

    audioElement.play();
});

const pauseButton = document.getElementById('pauseButton');

pauseButton.addEventListener('click', function () {
    if (audioElement.paused) {
        audioElement.play();
        pauseButton.textContent = "Pausar";
    } else {
        audioElement.pause();
        pauseButton.textContent = "Reanudar";
    }
});



async function copiarAlPortapapeles(texto) {
    try {
        await navigator.clipboard.writeText(texto);
        console.log('Texto copiado al portapapeles:', texto);
    } catch (err) {
        console.error('Error al copiar:', err);
    }
}
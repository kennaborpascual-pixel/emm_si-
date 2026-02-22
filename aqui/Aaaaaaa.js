const overlay = document.getElementById('overlay');
const btn_iniciar = document.getElementById('btn_iniciar');
const musica = document.getElementById('musica_fondo');

btn_iniciar.addEventListener('click', () => {
    musica.play();
    overlay.style.display = 'none'; 
});


const btn_si = document.getElementById('btn_si');
const btn_Talvez = document.getElementById('btn_Talvez');
const btn_No = document.getElementById('btn_No');
const btn_Nunca = document.getElementById('btn_Nunca');
const btn_Jamas = document.getElementById('btn_Jamas');

const pregunta = document.getElementById('pregunta');
const gif = document.getElementById('gif_curry');

let intentosNegativos = 0;
const limiteParaApartadoEspecial = 3; 

function manejarClickNegativo() {
    intentosNegativos++;

    if (intentosNegativos < limiteParaApartadoEspecial) {
        const nuevoTamano = 1 + (intentosNegativos * 0.8);
        btn_si.style.transform = `scale(${nuevoTamano})`;
        btn_Talvez.style.transform = `scale(${nuevoTamano})`;
        
        pregunta.innerText = "estas segura???";
    } else {
        pregunta.innerText = "Oooh ya veo...";
        
        gif.src = "ummya.gif"; 
        
        irAApartadoFinal();
    }
}

btn_No.addEventListener('click', manejarClickNegativo);
btn_Nunca.addEventListener('click', manejarClickNegativo);
btn_Jamas.addEventListener('click', manejarClickNegativo);

btn_si.addEventListener('click', () => {
    pregunta.innerText = "Weno, Grazie mille :)... me mandarias una captura?";
    gif.src = "si.gif";
    irAApartadoFinal();
});

btn_Talvez.addEventListener('click', () => {
    pregunta.innerText = "¡Bueno, un talvez es un 'casi sí' me mandarias una captura?";
    gif.src = "stc.jpg";
    irAApartadoFinal();
});

function irAApartadoFinal() {
    
    const todosLosBotones = [btn_si, btn_Talvez, btn_No, btn_Nunca, btn_Jamas];
    todosLosBotones.forEach(btn => btn.style.display = 'none');
    
    gif.style.transform = 'scale(1.5)';
}
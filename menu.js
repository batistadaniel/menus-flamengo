let historia = document.getElementById('historia');
let titulos = document.getElementById('titulos');

let historiaClube = document.getElementById('historiaClube');
let titulosClube = document.getElementById('titulosClube');


historia.addEventListener('click', () => {
    historiaClube.style.display = 'flex';
    titulosClube.style.display = 'none';
    
    // historia.classList.add('active-button');
    // titulos.classList.remove('active-button');
});

titulos.addEventListener('click', () => {
    historiaClube.style.display = 'none';
    titulosClube.style.display = 'flex';
    
    // titulos.classList.add('active-button');
    // historia.classList.remove('active-button');
});
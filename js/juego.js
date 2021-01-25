let ferrari = document.querySelector('#coche1');
let mercedes = document.querySelector('#coche2');
let minardi = document.querySelector('#coche3');

let mensaje = document.querySelector('#mensaje');

let avanceFerrari = 0;
let avanceMercedes = 0;
let avanceMinardi = 0;

let nitro = 3;

document.addEventListener('keydown', capturarTeclas);

function capturarTeclas(event) {
    switch (event.keyCode) {
        case 32:
            //mover coche
            moverFerrari(15);
            break;

        case 78:
            let velocidad = (nitro > 0) ? 40 : 10;
            moverFerrari(velocidad);
            nitro--;//para que vaya descontando las 3 veces que puede actuar el nitro y no siga avanzando tan rápido
            break;
    }
}

function moverFerrari(pVelocidad) {
    avanceFerrari += pVelocidad;
    ferrari.style.marginLeft = avanceFerrari + 'px';
    if (avanceFerrari >= 670) {
        pararJuego('Ferrari')
    }
}


//funciones intervalicas necesitan de una variable para almacenarse

let int1 = setInterval(moverMercedes, 100);

function moverMercedes() {
    avanceMercedes += 15;
    mercedes.style.marginLeft = avanceMercedes + 'px';
    if (avanceMercedes >= 670) {
        pararJuego('Mercedes');
    }
}


//tercer coche

let int2 = setInterval(moverMinardi, 100);

function moverMinardi() {
    avanceMinardi += Math.random() * 30;
    minardi.style.marginLeft = avanceMinardi + 'px';
    if (avanceMinardi >= 670) {
        pararJuego('Minardi');
    }
}


function pararJuego(pNombre) {
    clearInterval(int1);
    clearInterval(int2);
    document.removeEventListener('keydown', capturarTeclas)
    mensaje.innerText = 'Ha ganado ' + pNombre;
}
const clickActualizarImagen = () =>{

    const botonesJuego = document.querySelectorAll('.juego');//coge a todos los botones con la clase juego
    const imagenObjetivo = document.getElementById('imagenObjetivo');

    const actualizarImagen = (event) => {
        const imagenBoton = event.currentTarget.querySelector('img');
        imagenObjetivo.src = imagenBoton.src;
    }

    botonesJuego.forEach(boton => {
        boton.addEventListener('click', actualizarImagen);
    });

}
clickActualizarImagen();

const desactivarBotones = () =>{
    const botonPiedra = document.getElementById('botonPiedra');
    const botonPapel = document.getElementById('botonPapel');
    const botonTijera = document.getElementById('botonTijera');

    botonPiedra.disabled = true;
    botonPapel.disabled = true;
    botonTijera.disabled = true;
};


const juego = ()=>{

    const botonPiedra = document.getElementById('botonPiedra');
    const botonPapel = document.getElementById('botonPapel');
    const botonTijera = document.getElementById('botonTijera');
    const imagenObjetivoCpu = document.getElementById('imagenObjetivoCpu');
    let mensaje = document.getElementById('mensaje');
    let puntosUsuario = document.getElementById('puntosUsuario');
    let puntosCpu = document.getElementById('puntosCpu');

    console.log(puntosUsuario+'va');
    let contarUsuario = 0;
    let contarCpu = 0;

    const cpuJuega =() =>{
        const opciones = ['piedra', 'papel', 'tijera'];
        const eleccionCpu = opciones[Math.floor(Math.random() * opciones.length)];
        
        imagenObjetivoCpu.src = `../IMAGES/${eleccionCpu}.png`;
        return eleccionCpu;
    }

    const definirGanador = (opcionUsuario, opcionCpu) =>{

        if(opcionUsuario === opcionCpu) return 'Empate';

            if(opcionUsuario === 'piedra' && opcionCpu === 'tijera' || 
                opcionUsuario === 'papel'  && opcionCpu === 'piedra' ||
                opcionUsuario === 'tijera' && opcionCpu === 'papel'
            ){
                
                return 'Usuario';
            }else{
                return 'Cpu'; 
            }
    }

    const contarPuntos = (ganador) =>{

        if(ganador === 'Usuario'){

            contarUsuario += 1;
            puntosUsuario.innerText = contarUsuario;

        }else if(ganador === 'Cpu'){

            contarCpu += 1;
            puntosCpu.innerText = contarCpu;
        }

        if(contarUsuario === 3){
            mensaje.innerText = '¡Haz Ganado!';
            desactivarBotones();
        }else if(contarCpu === 3){
            mensaje.innerText = '¡Ganó la CPU!';
            desactivarBotones();
        }
    }

    const usuarioElige=(opcionUsuario) =>{
        setTimeout(() => {
            const opcionCpu = cpuJuega();
            const resultado = definirGanador(opcionUsuario,opcionCpu);
            contarPuntos(resultado);
        }, 1000); 
    }
    
    botonPiedra.addEventListener('click', () => usuarioElige('piedra'));
    botonPapel.addEventListener('click', () => usuarioElige('papel'));
    botonTijera.addEventListener('click', () => usuarioElige('tijera'));
    
};

juego();

const refresh = () =>{

    const reset = document.getElementById('reset');

    reset.addEventListener('click', () =>{
        location.reload();
    });
};
refresh();
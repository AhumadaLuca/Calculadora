var resultadoCalculo = false;
var historial = []

function numeros(valor) {
    if(resultadoCalculo && valor == '+' || valor == '-' || valor == '/' || valor == '*' || valor == '<' || valor == '>'){
        document.getElementById('resultado').value += valor;
    }else if (resultadoCalculo){
        document.getElementById('resultado').value = valor;
    }else if(!resultadoCalculo){
        document.getElementById('resultado').value += valor;
    }
    resultadoCalculo = false;
  }

function operacion(){
    var opera = document.getElementById('resultado').value;
    if(opera == 0 || opera == ''){
        document.getElementById('resultado').value = "0";
    }else{
        document.getElementById('resultado').value = eval(opera);
        resultadoCalculo = true;

        var resultado = eval(opera);
        var operacion = opera + "=" + resultado;

        historial.push(operacion);
        actualizarHistorial();
    }
}

function resetear(){
    document.getElementById('resultado').value = '';
}

const historialBtn = document.getElementById('historial-btn');
const historialMenu = document.getElementById('historial-menu');
const operacionesLista = document.getElementById('operaciones-lista');

historialBtn.addEventListener('click', () => {
    historialMenu.classList.toggle('open');
})

function actualizarHistorial(){
    operacionesLista.innerHTML = '';


    for(let i = 0; i < historial.length; i++){
        const operacion = document.createElement('li');
        operacion.textContent = historial[i];
        operacionesLista.appendChild(operacion);
    }
}

actualizarHistorial();
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  const numero1 = document.getElementById('numero1').value,
        numero2 = document.getElementById('numero2').value;

  validarCampos( numero1, numero2 );
  form.reset();
});


const validarCampos = ( numero1, numero2 ) => {

  if ( isNaN(numero1) || isNaN(numero2)  ) {
    mostrarError('Solo debes ingresar valores numéricos');
    
  }else if ( numero1 < 0  || numero2 < 0 ) {
    mostrarError('Ingresa valores numéricos iguales o mayores a cero');

  }else {
    sumarNumeros( Number(numero1), Number(numero2) );
  }

}

const mostrarError = ( mensaje ) => {
  
  const alerta = document.createElement('div');
  alerta.setAttribute('class', 'alert');
  alerta.textContent = mensaje;

  const container = document.querySelector('.container');
  container.insertAdjacentElement('afterbegin', alerta );

  setTimeout(() => container.firstElementChild.remove() , 3000 );
}


const sumarNumeros = ( numero1, numero2 )  => {
  let resultado = numero1 + numero2;
  renderizarResultado( resultado );
}


const renderizarResultado = ( resultado ) => {

  const contenedor = document.querySelector('.resultado > p');
  contenedor.textContent = '';

  contenedor.textContent = `Resultado: ${ resultado }`;
}
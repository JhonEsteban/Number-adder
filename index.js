const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  const numero1 = document.getElementById('numero1').value,
        numero2 = document.getElementById('numero2').value;

  validarCampos( numero1, numero2 );
  form.reset();
});


const validarCampos = ( n1, n2 ) => {

  if ( isNaN(n1) || isNaN(n2)  ) {
    mostrarError('Solo debes ingresar valores numericos');
    
  }else if ( n1 <= 0  || n2 <= 0 ) {
    mostrarError('Ingresa valores numericos mayores a cero');

  }else {
    sumarNumeros( Number(n1), Number(n2) );
  }

}


const sumarNumeros = ( numero1, numero2 )  => {
  let resultado = numero1 + numero2;
  renderizarResultado( resultado);
}


const renderizarResultado = ( resultado) => {

  const contenedor = document.querySelector('.resultado > p');
  contenedor.textContent = '';

  contenedor.textContent = `Resultado: ${ resultado }`;
}


const mostrarError = (mensaje) => {
  
  const alert = document.createElement('div');
  alert.setAttribute('class', 'alert');
  alert.textContent = mensaje;

  const container = document.querySelector('.container');

  container.insertAdjacentElement('afterbegin', alert );

  setTimeout(() => container.firstElementChild.remove() , 4000 );
}


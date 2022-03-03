const sumar = () => {
  const forma = document.getElementById("forma");

  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];

  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    if(isNaN(resultado))
    resultado = 'Registra números';

  document.getElementById("resultado").innerHTML = `resultado: ${resultado}`;
    console.log(resultado);
    
  operandoA.value = '';
  operandoB.value = '';
};

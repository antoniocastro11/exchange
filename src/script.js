const taxas = {
  BRL: 1.0,
  USD: 5.00,
  EUR: 5.40,
  JPY: 0.035
};

function converterMoeda() {
  const moeda1 = document.getElementById('moeda1').value;
  const moeda2 = document.getElementById('moeda2').value;
  const valor1Input = document.getElementById('valor1');
  const valor1 = parseFloat(valor1Input.value);

  if (isNaN(valor1) ||  valor1 < 0) {
    document.getElementById('valor2').value = "";
    if (valor1 < 0) alert("Não é permitido valor negativo.");
    return;
  }

  const emReais = valor1 * taxas[moeda1];
  const convertido = emReais / taxas[moeda2];
  document.getElementById('valor2').value = convertido.toFixed(2);
}

function converterMoedaReversa() {
  const moeda1 = document.getElementById('moeda1').value;
  const moeda2 = document.getElementById('moeda2').value;
  const valor2Input = document.getElementById('valor2');
  const valor2 = parseFloat(valor2Input.value);

  if (isNaN(valor2) || valor2 < 0) {
    document.getElementById('valor1').value = "";
    if (valor2 < 0) alert("Não é permitido valor negativo.");
    return;
  }

  const emReais = valor2 * taxas[moeda2];
  const convertido = emReais / taxas[moeda1];
  document.getElementById('valor1').value = convertido.toFixed(2);
}
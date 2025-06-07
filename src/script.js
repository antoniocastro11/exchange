// Taxas de câmbio estáticas (valores fictícios atualizados em 2025)
const taxas = {
  BRL: 1.0,      
  USD: 5.00,     
  EUR: 5.40,     
  JPY: 0.035    
};

function converterMoeda() {
  const moeda1 = document.getElementById('moeda1').value;
  const moeda2 = document.getElementById('moeda2').value;
  const valor1 = parseFloat(document.getElementById('valor1').value);

  if (!isNaN(valor1)) {
    const emReais = valor1 * taxas[moeda1];      
    const convertido = emReais / taxas[moeda2];  
    document.getElementById('valor2').value = convertido.toFixed(2);
  } else {
    document.getElementById('valor2').value = "";
  }
}

function converterMoedaReversa() {
  const moeda1 = document.getElementById('moeda1').value;
  const moeda2 = document.getElementById('moeda2').value;
  const valor2 = parseFloat(document.getElementById('valor2').value);

  if (!isNaN(valor2)) {
    const emReais = valor2 * taxas[moeda2];      
    const convertido = emReais / taxas[moeda1];  
    document.getElementById('valor1').value = convertido.toFixed(2);
  } else {
    document.getElementById('valor1').value = "";
  }
}
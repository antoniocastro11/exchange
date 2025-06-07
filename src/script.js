    const taxa = 5.00;

    function converterParaDolar() {
      const valorReal = parseFloat(document.getElementById('real').value);

      if (!isNaN(valorReal)) {
        const valorDolar = valorReal / taxa;
        document.getElementById('dolar').value = valorDolar.toFixed(2);
      } else {
        document.getElementById('dolar').value = "";
      }
    }

    function converterParaReal() {
      const valorDolar = parseFloat(document.getElementById('dolar').value);

      if (!isNaN(valorDolar)) {
        const valorReal = valorDolar * taxa;
        document.getElementById('real').value = valorReal.toFixed(2);
      } else {
        document.getElementById('real').value = "";
      }
    }
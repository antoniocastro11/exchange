function converter() {
        const taxa = 5.0;
        const valorReal = parseFloat(document.getElementById("valor").value);

        if (isNaN(valorReal) || valorReal <= 0) {
          document.getElementById("resultado").textContent =
            "Digite um valor válido.";
          return;
        }

        const valorDolar = valorReal / taxa;
        document.getElementById(
          "resultado"
        ).textContent = `US$ ${valorDolar.toFixed(2)}`;
      }
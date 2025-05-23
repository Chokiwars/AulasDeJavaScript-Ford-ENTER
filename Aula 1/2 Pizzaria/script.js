function calcularDivisao() {
      const valorConta = parseFloat(document.getElementById('valorConta').value);
      const qtdClientes = parseInt(document.getElementById('qtdClientes').value);

      if (isNaN(valorConta) || isNaN(qtdClientes) || qtdClientes <= 0) {
        document.getElementById('resultado').textContent = 'Insira valores válidos.';
        return;
      }

      const valorPorCliente = valorConta / qtdClientes;

      document.getElementById('resultado').textContent =
        `Cada cliente deve pagar: R$ ${valorPorCliente.toFixed(2)}`;
    }
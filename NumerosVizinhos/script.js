    function mostrarVizinhos() {
      const input = document.getElementById('numero');
      const numero = parseInt(input.value);

      if (isNaN(numero)) {
        document.getElementById('resultado').textContent = 'Por favor, insira um número válido.';
        return;
      }

      const anterior = numero - 1;
      const posterior = numero + 1;

      document.getElementById('resultado').textContent =
        `Número digitado: ${numero} | Anterior: ${anterior} | Posterior: ${posterior}`;
    }

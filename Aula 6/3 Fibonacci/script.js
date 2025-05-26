function gerarFibonacci(n) {
      const sequencia = [];
      let a = 1, b = 1;

      if (n >= 1) sequencia.push(1);
      if (n >= 2) sequencia.push(1);

      for (let i = 3; i <= n; i++) {
        const proximo = a + b;
        sequencia.push(proximo);
        a = b;
        b = proximo;
      }

      return sequencia;
    }

    function mostrarFibonacci() {
      const quantidade = parseInt(document.getElementById('quantidade').value);
      const resultadoDiv = document.getElementById('resultado');
      const opcoesDiv = document.getElementById('opcoesRepetir');

      if (isNaN(quantidade) || quantidade < 1) {
        alert("Por favor, insira um número válido maior que zero.");
        return;
      }

      const sequencia = gerarFibonacci(quantidade);
      resultadoDiv.innerHTML = `<p>Sequência de Fibonacci com ${quantidade} elemento(s):</p><strong>${sequencia.join(', ')}</strong>`;

      // Mostrar opções para repetir
      opcoesDiv.style.display = 'block';
    }

    function repetir() {
      document.getElementById('quantidade').value = '';
      document.getElementById('resultado').innerHTML = '';
      document.getElementById('opcoesRepetir').style.display = 'none';
      document.getElementById('quantidade').focus();
    }

    function encerrar() {
      document.getElementById('resultado').innerHTML += `<p><em>Processo encerrado. Obrigado!</em></p>`;
      document.getElementById('opcoesRepetir').style.display = 'none';
    }
function mostrarTabuadas() {
      const inicio = parseInt(document.getElementById('inicio').value);
      const resultadoDiv = document.getElementById('resultado');
      const opcoesDiv = document.getElementById('opcoesRepetir');

      if (isNaN(inicio) || inicio < 1 || inicio > 9) {
        alert("Por favor, insira um número de 1 a 9.");
        return;
      }

      let resultadoHTML = '';
      for (let i = inicio; i <= 9; i++) {
        resultadoHTML += `<div class="tabuada"><strong>Tabuada do ${i}:</strong><br>`;
        for (let j = 1; j <= 10; j++) {
          resultadoHTML += `${i} x ${j} = ${i * j}<br>`;
        }
        resultadoHTML += `</div>`;
      }

      resultadoDiv.innerHTML = resultadoHTML;
      opcoesDiv.style.display = 'block';
    }

    function repetir() {
      document.getElementById('inicio').value = '';
      document.getElementById('resultado').innerHTML = '';
      document.getElementById('opcoesRepetir').style.display = 'none';
      document.getElementById('inicio').focus();
    }

    function encerrar() {
      document.getElementById('resultado').innerHTML += `<p><em>Processo encerrado. Obrigado!</em></p>`;
      document.getElementById('opcoesRepetir').style.display = 'none';
    }
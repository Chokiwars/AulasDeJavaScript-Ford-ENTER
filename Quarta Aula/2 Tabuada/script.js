function mostrarTabuada() {
            // Obter o número inserido pelo usuário
            var numero = parseInt(document.getElementById('numero').value);
            
            // Verificar se o número é válido
            if (isNaN(numero)) {
                alert("Por favor, insira um número válido.");
                return;
            }

            // Exibir a tabuada
            var tabuadaDiv = document.getElementById('tabuada');
            tabuadaDiv.innerHTML = ''; // Limpar qualquer tabuada anterior

            var resultado = '';
            for (var i = 1; i <= 10; i++) {
                resultado += numero + ' x ' + i + ' = ' + (numero * i) + '<br>';
            }

            // Mostrar o resultado na página
            tabuadaDiv.innerHTML = resultado;
        }
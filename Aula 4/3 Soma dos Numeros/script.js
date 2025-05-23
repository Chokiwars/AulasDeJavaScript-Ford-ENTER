function calcularSoma() {
            // Obter o número inserido pelo usuário
            var numero = parseInt(document.getElementById('numero').value);
            
            // Verificar se o número é válido
            if (isNaN(numero) || numero <= 0) {
                alert("Por favor, insira um número inteiro positivo.");
                return;
            }

            // Calcular a soma dos números de 1 até o número informado
            var soma = 0;
            for (var i = 1; i <= numero; i++) {
                soma += i;
            }

            // Exibir o resultado
            var resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = 'A soma dos números de 1 até ' + numero + ' é: ' + soma;
        }
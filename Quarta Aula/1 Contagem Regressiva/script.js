function iniciarContagem() {
            var numero = parseInt(document.getElementById('numero').value);
            
            // Verificar se o número é válido
            if (isNaN(numero) || numero <= 0) {
                alert("Por favor, insira um número inteiro positivo.");
                return;
            }

            // Exibir a contagem regressiva
            var contagemDiv = document.getElementById('contagem');
            contagemDiv.innerHTML = ''; // Limpar qualquer contagem anterior

            var intervalo = setInterval(function() {
                if (numero >= 0) {
                    contagemDiv.innerHTML = "Contagem: " + numero;
                    numero--;
                } else {
                    clearInterval(intervalo); // Parar a contagem quando chegar a zero
                    contagemDiv.innerHTML = "Contagem finalizada!";
                }
            }, 1000); // A cada 1 segundo
        }
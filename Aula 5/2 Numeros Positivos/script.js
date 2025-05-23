function somarPositivos() {
            let soma = 0;

            while (true) {
                let numero = parseFloat(prompt("Digite um número (digite um número negativo para encerrar):"));

                // Se o número for negativo, sai do loop
                if (numero < 0) {
                    break;
                }

                // Se o número for positivo, soma
                if (numero >= 0) {
                    soma += numero;
                }
            }

            alert("A soma dos números positivos é: " + soma);
        }
    
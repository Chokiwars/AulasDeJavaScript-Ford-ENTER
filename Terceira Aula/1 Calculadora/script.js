 function calcular() {
            const num1 = parseInt(document.getElementById("num1").value);
            const num2 = parseInt(document.getElementById("num2").value);
            const operador = document.getElementById("operador").value;
            let resultado;

            switch (operador) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case '*':
                    resultado = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        resultado = num1 / num2;
                    } else {
                        resultado = "Erro: divisão por zero!";
                    }
                    break;
                default:
                    resultado = "Operador inválido!";
            }

            document.getElementById("resultado").innerText = "Resultado: " + resultado;
        }
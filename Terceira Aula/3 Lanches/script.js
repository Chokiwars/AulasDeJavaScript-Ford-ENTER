function calcularTotal() {
            const codigo = parseInt(document.getElementById("codigo").value);
            const quantidade = parseInt(document.getElementById("quantidade").value);
            let precoUnitario;
            let total;

            // Switch para associar o código ao preço
            switch (codigo) {
                case 100:
                    precoUnitario = 1.70;
                    break;
                case 101:
                    precoUnitario = 2.30;
                    break;
                case 102:
                    precoUnitario = 2.60;
                    break;
                case 103:
                    precoUnitario = 2.40;
                    break;
                case 104:
                    precoUnitario = 2.50;
                    break;
                case 105:
                    precoUnitario = 1.00;
                    break;
                default:
                    precoUnitario = 0;
            }

            // Verifica se o código é válido e calcula o total
            if (precoUnitario > 0 && quantidade > 0) {
                total = precoUnitario * quantidade;
                document.getElementById("resultado").innerText = "Total a pagar: R$ " + total.toFixed(2);
            } else if (precoUnitario === 0) {
                document.getElementById("resultado").innerText = "Código inválido!";
            } else {
                document.getElementById("resultado").innerText = "Quantidade inválida!";
            }
        }
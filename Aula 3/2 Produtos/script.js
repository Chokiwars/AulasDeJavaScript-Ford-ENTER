function classificarProduto() {
            const codigo = parseInt(document.getElementById("codigo").value);
            let classificacao;

            switch (codigo) {
                case 1:
                    classificacao = "Alimento não-perecível";
                    break;
                case 2:
                case 3:
                case 4:
                    classificacao = "Alimento perecível";
                    break;
                case 5:
                case 6:
                    classificacao = "Vestuário";
                    break;
                case 7:
                    classificacao = "Higiene Pessoal";
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                    classificacao = "Limpeza e Utensílios Domésticos";
                    break;
                default:
                    classificacao = "Código inválido";
            }

            document.getElementById("resultado").innerText = "Classificação: " + classificacao;
        }
function verificarSenha() {
            let senhaCorreta = "js123";
            let senha = prompt("Digite a senha:");

            // Enquanto a senha estiver errada, o prompt será mostrado
            while (senha !== senhaCorreta) {
                senha = prompt("Senha incorreta! Tente novamente:");
            }

            // Quando a senha correta for digitada, exibe o alerta
            alert("Acesso concedido.");
        }
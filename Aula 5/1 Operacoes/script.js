function realizarCalculo() {
    let continuar = true;

    while (continuar) {
        let numero1 = parseFloat(prompt("Digite o primeiro número:"));
        let numero2 = parseFloat(prompt("Digite o segundo número:"));

        let operacao = prompt("Escolha a operação: \n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão");

        let resultado;

        switch (operacao) {
            case '1':
                resultado = numero1 + numero2;
                alert("Resultado da soma: " + resultado);
                break;
            case '2':
                resultado = numero1 - numero2;
                alert("Resultado da subtração: " + resultado);
                break;
            case '3':
                resultado = numero1 * numero2;
                alert("Resultado da multiplicação: " + resultado);
                break;
            case '4':
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                    alert("Resultado da divisão: " + resultado);
                } else {
                    alert("Não é possível dividir por zero!");
                }
                break;
            default:
                alert("Opção inválida! Tente novamente.");
                continue;
        }

        continuar = confirm("Deseja realizar outro cálculo?");
    }

    alert("Programa encerrado!");
}

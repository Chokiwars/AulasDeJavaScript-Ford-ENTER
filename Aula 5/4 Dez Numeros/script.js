function contarPares() {
    let contadorPares = 0;
    let totalNumeros = 10;

    for (let i = 1; i <= totalNumeros; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número:`));

        // Verifica se o número é par
        if (numero % 2 === 0) {
            contadorPares++;
        }
    }

    // Exibe a quantidade de números pares
    alert(`Você digitou ${contadorPares} número(s) par(es).`);
}
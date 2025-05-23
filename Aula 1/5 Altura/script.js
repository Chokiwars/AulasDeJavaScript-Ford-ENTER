function compararAlturas() {
    const altura1 = parseFloat(document.getElementById('altura1').value);
    const altura2 = parseFloat(document.getElementById('altura2').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(altura1) || isNaN(altura2)) {
        resultado.textContent = "Por favor, insira valores válidos para ambas as alturas.";
        return;
    }

    if (altura1 > altura2) {
        resultado.textContent = "A Pessoa 1 é mais alta.";
    } else if (altura2 > altura1) {
        resultado.textContent = "A Pessoa 2 é mais alta.";
    } else {
        resultado.textContent = "Ambas as pessoas têm a mesma altura.";
    }
}

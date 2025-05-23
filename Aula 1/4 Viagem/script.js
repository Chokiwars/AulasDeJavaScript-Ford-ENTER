function calcularDuracao() {
    const dias = parseInt(document.getElementById('dias').value) || 0;
    const horas = parseInt(document.getElementById('horas').value) || 0;

    // Calcula a duração total em horas
    const totalHoras = (dias * 24) + horas;

    // Exibe o resultado
    document.getElementById('resultado').textContent = 
        `A duração total da viagem é de ${totalHoras} horas.`;
}

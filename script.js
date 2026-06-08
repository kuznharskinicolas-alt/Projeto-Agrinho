function calcularImpacto() {
    // Pega o valor digitado no input
    const hectares = document.getElementById('hectares').value;
    const resultadoDiv = document.getElementById('resultado');

    // Validação simples para garantir que o usuário digitou um número válido
    if (hectares === '' || hectares <= 0) {
        alert('Por favor, insira uma quantidade válida de hectares.');
        return;
    }

    // Cálculos fictícios baseados em benefícios sustentáveis por hectare/ano
    // Ex: Cada hectare com plantio direto economiza cerca de 10.000 litros de água evaporada/ano
    // e retém cerca de 1.200 kg de CO2 no solo/ano.
    const aguaEconomizada = hectares * 10000;
    const carbonoRetido = hectares * 1200;

    // Atualiza os valores na tela com formatação de números local (Brasil)
    document.getElementById('agua-resultado').innerText = aguaEconomizada.toLocaleString('pt-BR');
    document.getElementById('carbono-resultado').innerText = carbonoRetido.toLocaleString('pt-BR');

    // Remove a classe 'hidden' para exibir o bloco de resultados
    resultadoDiv.classList.remove('hidden');
}
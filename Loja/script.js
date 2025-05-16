function mostrarOpcoesPagamento() {
      const preco = parseFloat(document.getElementById('precoProduto').value);

      if (isNaN(preco) || preco <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira um valor válido para o produto.';
        return;
      }

      const aVista = preco * 0.90; // 10% de desconto
      const parcelado = preco / 3; // 3x sem juros

      document.getElementById('resultado').innerHTML =
        `<p>Preço do produto: R$ ${preco.toFixed(2)}</p>
         <p>🔹 Pagamento à vista (10% de desconto): <strong>R$ ${aVista.toFixed(2)}</strong></p>
         <p>🔹 Pagamento em 3x sem juros: <strong>3x de R$ ${parcelado.toFixed(2)}</strong></p>`;
    }
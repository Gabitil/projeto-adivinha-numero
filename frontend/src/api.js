// URL base da API onde o backend está em execução
const BASE_URL = "http://localhost:5000"; 

// Função que solicita um número secreto ao servidor
export async function gerarNumeroSecreto() {
  // Faz uma requisição GET para /adivinha
  const res = await fetch(`${BASE_URL}/adivinha`);
  // Converte e retorna a resposta no formato JSON
  return res.json();
}

// Função que envia um palpite para verificação
// palpite: número chutado pelo usuário
// numeroSecreto: valor gerado previamente pelo backend
export async function verificarPalpite(palpite, numeroSecreto) {
  // Faz uma requisição POST para /adivinha com cabeçalhos e corpo JSON
  const res = await fetch(`${BASE_URL}/adivinha`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Indica que o corpo é JSON
    },
    body: JSON.stringify({ palpite, numeroSecreto }), // Converte os dados em string JSON
  });

  // Se o status da resposta não for 2xx, lança um erro com o texto retornado
  if (!res.ok) {
    const erro = await res.text();
    throw new Error(erro);
  }

  // Retorna o texto da resposta (ex: "Muito alto", "Parabéns!", etc.)
  return res.text();
}

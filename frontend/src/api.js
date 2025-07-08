const BASE_URL = "http://localhost:5000"; 

export async function gerarNumeroSecreto() {
  const res = await fetch(`${BASE_URL}/adivinha`);
  return res.json();
}

export async function verificarPalpite(palpite, numeroSecreto) {
  const res = await fetch(`${BASE_URL}/adivinha`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ palpite, numeroSecreto }),
  });

  if (!res.ok) {
    const erro = await res.text();
    throw new Error(erro);
  }

  return res.text(); // retorna string do tipo "Muito alto", "Parabéns!", etc.
}

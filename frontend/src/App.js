import React, { useState, useEffect } from "react";
import {
  gerarNumeroSecreto,
  verificarPalpite,
} from "./api";

function App() {
  const [numeroSecreto, setNumeroSecreto] = useState(null);
  const [palpite, setPalpite] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tentativas, setTentativas] = useState(0);

  // Quando a página carregar, gerar o número
  useEffect(() => {
    novaRodada();
  }, []);

  async function novaRodada() {
    const { numeroSecreto } = await gerarNumeroSecreto();
    setNumeroSecreto(numeroSecreto);
    setPalpite("");
    setMensagem("Novo número gerado! Faça seu palpite.");
    setTentativas(0);
  }

  async function enviarPalpite() {
    if (!palpite) return;

    try {
      const resposta = await verificarPalpite(Number(palpite), numeroSecreto);
      setMensagem(resposta);
      setTentativas(t => t + 1);
    } catch (erro) {
      setMensagem("Erro: " + erro.message);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h1>Jogo da Adivinhação</h1>
      <p>{mensagem}</p>

      <input
        type="number"
        value={palpite}
        onChange={(e) => setPalpite(e.target.value)}
        placeholder="Digite um número entre 1 e 100"
        style={{ width: "100%", padding: 8 }}
      />

      <button onClick={enviarPalpite} style={{ marginTop: 10, width: "100%" }}>
        Verificar Palpite
      </button>

      <button onClick={novaRodada} style={{ marginTop: 10, width: "100%" }}>
        Nova Rodada
      </button>

      <p>Tentativas: {tentativas}</p>
    </div>
  );
}

export default App;

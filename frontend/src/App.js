import React, { useState, useEffect } from "react";
import './App.css';
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
    <main className="container">
      <h1 className="titulo">Jogo da Adivinhação</h1>

      <p className="mensagem">{mensagem}</p>

      <form
        className="formulario"
        onSubmit={(e) => {
          e.preventDefault();
          enviarPalpite();
        }}
      >
        <label htmlFor="palpite" className="label">
          Digite seu palpite:
        </label>

        <input
          id="palpite"
          type="number"
          className="input"
          value={palpite}
          onChange={(e) => setPalpite(e.target.value)}
          placeholder="Número entre 1 e 100"
          required
          min="1"
          max="100"
        />

        <button type="submit" className="botao enviar">
          Verificar Palpite
        </button>
      </form>

      <button onClick={novaRodada} className="botao nova-rodada">
        Nova Rodada
      </button>

      <p className="tentativas">Tentativas: {tentativas}</p>
    </main>
  );
}

export default App;

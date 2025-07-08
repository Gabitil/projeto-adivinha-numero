import React, { useState, useEffect } from "react"; // Importa React e os hooks useState e useEffect
import './App.css'; // Importa o arquivo de estilo CSS
import {
  gerarNumeroSecreto,
  verificarPalpite,
} from "./api"; // Importa funções da API para gerar e verificar o número secreto

function App() {
  // estado para armazenar o número secreto gerado pela API
  const [numeroSecreto, setNumeroSecreto] = useState(null);
  // estado para armazenar o palpite digitado pelo usuário
  const [palpite, setPalpite] = useState("");
  // estado para exibir mensagens de status ou erro
  const [mensagem, setMensagem] = useState("");
  // estado para contar quantas tentativas o usuário fez
  const [tentativas, setTentativas] = useState(0);

  // useEffect executa quando o componente monta: inicia uma nova rodada
  useEffect(() => {
    novaRodada();
  }, []);

  // Função para iniciar nova rodada:
  // 1) Chama a API gerarNumeroSecreto
  // 2) Armazena o número gerado em estado
  // 3) Reseta palpite, mensagem e contador de tentativas
  async function novaRodada() {
    const { numeroSecreto } = await gerarNumeroSecreto();
    setNumeroSecreto(numeroSecreto);
    setPalpite("");
    setMensagem("Novo número gerado! Faça seu palpite.");
    setTentativas(0);
  }

  // Função para enviar o palpite do usuário:
  // 1) Ignora se o palpite estiver vazio
  // 2) Chama API verificarPalpite passando o palpite e o número secreto
  // 3) Atualiza a mensagem de retorno e incrementa número de tentativas
  // 4) Em caso de erro, exibe mensagem de erro
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

  // JSX retornado pelo componente
  return (
    <main className="container">
      <h1 className="titulo">Jogo da Adivinhação</h1>

      {/* Exibe mensagem de status ou resultado */}
      <p className="mensagem">{mensagem}</p>

      {/* Formulário de palpite */}
      <form
        className="formulario"
        onSubmit={(e) => {
          e.preventDefault(); // evita reload da página
          enviarPalpite();    // chama função que verifica o palpite
        }}
      >
        <label htmlFor="palpite" className="label">
          Digite seu palpite:
        </label>

        <input
          id="palpite"
          type="number"
          className="input"
          value={palpite} // valor controlado pelo estado
          onChange={(e) => setPalpite(e.target.value)} // atualiza estado ao digitar
          placeholder="Número entre 1 e 100"
          required
          min="1"
          max="100"
        />

        <button type="submit" className="botao enviar">
          Verificar Palpite
        </button>
      </form>

      {/* Botão para iniciar nova rodada manualmente */}
      <button onClick={novaRodada} className="botao nova-rodada">
        Nova Rodada
      </button>

      {/* Exibe número de tentativas realizadas */}
      <p className="tentativas">Tentativas: {tentativas}</p>
    </main>
  );
}

export default App; // Exporta o componente para ser usado em outras partes da aplicação
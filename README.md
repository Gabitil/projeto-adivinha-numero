
# 🎯 Projeto: Jogo da Adivinhação (React + .NET)

Este é um projeto simples de jogo da adivinhação com frontend em React e backend em .NET 8, utilizando API RESTful.

## ✅ Como rodar o projeto localmente

### 📦 Pré-requisitos:

- Node.js (v18+)
- .NET SDK 8.0
- Git (opcional)

---

### 🚀 Rodando o backend (.NET)

Dentro da página principal do projeto, abra o prompt de comando e faça a seguinte operação:

```bash
# 1. Acesse a pasta da API
cd ApiAdvinha

# 2. Restaure as dependências e inicie o servidor
dotnet run --urls http://localhost:5000
```

O backend estará disponível em: http://localhost:5000

Endpoint principal: http://localhost:5000/adivinha

Swagger (documentação): http://localhost:5000/swagger

---

### 🌐 Rodando o frontend (React)

Dentro da página principal do projeto, abra o prompt de comando e faça a seguinte operação:

```bash
# 1. Acesse a pasta do frontend
cd frontend

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
```

---

## 🧠 Como funciona o jogo

1. O backend gera um número secreto entre 1-100
2. O jogador envia palpites através da interface React
3. A API responde se o palpite é:

   - Muito alto ⬆️
   - Muito baixo ⬇️
   - Correto 🎉
4. Ao acertar, um novo jogo inicia automaticamente após 2 segundos

---

## 🤖🚀 Áreas de Aplicação da IA

### 1. **Aprendizado Acelerado das Tecnologias**

- **Desafio:** Nunca havia trabalhado com React ou .NET
- **Solução com IA:**

  - Utilizei a IA para explicar conceitos fundamentais:

    - Estrutura de projetos React
    - Componentes e hooks (useState, useEffect)
    - Configuração de API em .NET
    - Padrões RESTful
  - A IA forneceu analogias e exemplos práticos para acelerar a compreensão

### 2. **Resolução de Problemas Específicos**

**Integração Frontend-Backend:**

- IA ajudou a configurar o fetch corretamente e também a configurar o CORS.
  - Tive bastante problema com o CORS, já que não entendia muito bem a configuração do endereço.

### 3. **Documentação**

- A IA auxiliou na criação:

  - Comentários explicativos no código
  - Documentação de endpoints
  - Este arquivo de documentação
  - E a base de conhecimento deixei no projeto principal como Anotações.

---

## ✨ Conclusão

Devido a faculdade, e o tempo que perdi passando mal no fim de semana, acabou que não consegui fazer um projeto que eu achei satisfatório. Os padrões RESTful não foram totalmente compridos (Eu acho) e infelizmente não consegui implementar um banco de dados no projeto.

Porém, ainda assim achei o projeto divertido, principalmente por ele ter sido simples. Isso me ajudou bastante a aprender algo que eu não havia aprendido ainda (React e .net), por mais que o conhecimento ainda seja superficial os fundamentos são as bases de tudo e acredito ter avançado bastante no que é fundamental do aprendizado dessas ferramentas.

Espero poder continuar trabalhando com projetos assim e aprimorando cada vez mais meu conhecimento.

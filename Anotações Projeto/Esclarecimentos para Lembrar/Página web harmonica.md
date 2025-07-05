
Criar uma interface que:

---

## ✅ 1. **Seja visualmente agradável (harmonia visual)**

- As **cores combinam** entre si (nada muito berrante ou aleatório).
    
- A **fonte é legível**, com tamanhos consistentes.
    
- Há **espaçamentos coerentes** entre os elementos (margem/padding).
    
- A disposição dos elementos segue uma **hierarquia clara** (ex: título maior, botão abaixo, etc.).
    

---

## 🧱 2. **Tenha os campos bem alinhados**

- Campos de formulário (input, botão) devem estar **alinhados na vertical ou horizontal**, não "soltos" na página.
    
- Use **containers e flex/grid layout** para alinhar.
    
- Exemplos de alinhamento:
    

✅ Correto:

```plaintext
-------------------------------------
| [Digite o número aqui        ]     |
| [    Enviar     ]                 |
-------------------------------------
```

❌ Incorreto:

```plaintext
-------------------------------------
|     [ Enviar ]                   |
| [Digite o número aqui        ]    |
-------------------------------------
```

---

## 📐 3. **Tenha tamanhos padronizados**

- Inputs e botões com **larguras semelhantes**.
    
- Usar **classes reutilizáveis** de CSS.
    
- Evite misturar px, %, rem, vh/vw de forma confusa.
    

---

## 🧠 Em resumo, a dti está pedindo:

|Requisito|Exemplo ou dica|
|---|---|
|**Harmonia visual**|Evite usar 10 tipos de cores, tamanhos de fontes aleatórios, ou espaçamentos inconsistentes.|
|**Alinhamento**|Use `flexbox` ou `grid` para alinhar elementos (inputs, botões, mensagens).|
|**Padronização**|Inputs e botões devem ter o **mesmo tamanho**, mesma fonte, mesmo estilo.|

---

## 💡 Dicas práticas para fazer isso no seu projeto

### 📦 Estruture seu CSS com base em blocos:

```css
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, button {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
}
```

### ⚛️ Exemplo em React:

```jsx
<div className="container">
  <h1>Jogo da Adivinhação</h1>
  <input type="number" placeholder="Digite um número" />
  <button>Enviar</button>
  <p>Resultado: maior</p>
</div>
```

---

## 🎁 Ferramentas que ajudam nisso:

- Use **Flexbox**: para alinhamento fácil (`display: flex`)
- Use **CSS Grid**: para layout mais complexo
- Use **variáveis de cor e tamanho** para padronizar estilos
- Ou use um framework leve, como **Tailwind CSS**, se quiser padronização rápida (mas isso depende se a dti permite bibliotecas visuais)
    

---

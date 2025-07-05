## 🎯 Objetivo dos Testes Unitários

- **Verificar se cada parte do seu código funciona corretamente de forma isolada**.
- Ajudar a encontrar erros rapidamente enquanto desenvolve.
- Mostrar profissionalismo, boas práticas e domínio técnico.

---

## 🧪 1. **Testes no Backend (.NET)**

### 📚 Ferramentas

- **xUnit** (mais moderno, preferido)
- MSTest ou NUnit também funcionam, mas xUnit é o mais usado com .NET Core.

### 🧱 Exemplo simples com xUnit

Imagine que você tem esse método para verificar o palpite:

```csharp
public class JogoService
{
    public string VerificarPalpite(int palpite, int numeroSecreto)
    {
        if (palpite < numeroSecreto) return "maior";
        if (palpite > numeroSecreto) return "menor";
        return "correto";
    }
}
```

### ✅ Teste com xUnit:

1. Crie um projeto de teste:
    

```bash
dotnet new xunit -n Projeto.Tests
dotnet add Projeto.Tests reference ../Projeto
```

2. Crie um teste:
    

```csharp
public class JogoServiceTests
{
    [Fact]
    public void Retorna_Maior_Quando_Palpite_Menor()
    {
        var jogo = new JogoService();
        var resultado = jogo.VerificarPalpite(10, 50);

        Assert.Equal("maior", resultado);
    }

    [Fact]
    public void Retorna_Correto_Quando_Acerta()
    {
        var jogo = new JogoService();
        var resultado = jogo.VerificarPalpite(42, 42);

        Assert.Equal("correto", resultado);
    }
}
```

3. Executar os testes:
    

```bash
dotnet test
```

---

## ⚛️ 2. **Testes no Frontend (React)**

### 📚 Ferramentas

- **React Testing Library** (recomendado)
- **Jest** (vem por padrão com `create-react-app`)

### 🧱 Exemplo de componente:

```jsx
function Resultado({ resultado }) {
  return <p>{resultado}</p>
}
```

### ✅ Teste com React Testing Library:

```bash
npm install --save-dev @testing-library/react
```

```jsx
import { render, screen } from '@testing-library/react';
import Resultado from './Resultado';

test('exibe o resultado corretamente', () => {
  render(<Resultado resultado="Você acertou!" />);
  const elemento = screen.getByText(/você acertou!/i);
  expect(elemento).toBeInTheDocument();
});
```

### Rodar os testes:

```bash
npm test
```

---

## 🧠 Resumo prático:

|Camada|Ferramenta|Exemplo de Teste|
|---|---|---|
|Backend|xUnit|Verificar se lógica de palpite funciona|
|Frontend|React Testing Library|Verificar se mensagem "Você acertou!" aparece|

---

## 🎁 Dica Extra

Comece testando as **funções puras** da lógica de jogo (ex: verificar palpite) — são mais fáceis de testar do que UI ou banco de dados. Depois, evolua para os controladores e componentes React.
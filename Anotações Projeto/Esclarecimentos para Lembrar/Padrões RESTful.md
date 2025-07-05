
Ao utilizar a API backend (em .NET) seguir os seguintes princípios:

- Usar **HTTP corretamente**: métodos, códigos de status, e URIs com significado.
    
- Ter **endereços (rotas)** claros e coerentes.
    
- Ter **ações previsíveis**: GET busca, POST cria, PUT atualiza, DELETE remove.
    
- Retornar **status HTTP corretos** e **respostas em JSON** bem formatadas.

## 🧱 Exemplo prático com sua aplicação (Adivinhação de número)

### 📍Rota RESTful **correta:**

```http
POST /palpite
```

Envia um número e recebe resposta dizendo se está certo, maior ou menor.

### ❌ Exemplo de rota **não RESTful (ruim):**

```http
GET /verificarNumero?valor=50
```

- Está usando GET para alterar estado (errado).
- Está fazendo cálculo com query string.
- Não é claro o que está sendo verificado
---

## ✅ Princípios que você deve seguir:

|Recurso REST|Significado|Exemplo no seu projeto|
|---|---|---|
|**Verbo HTTP**|Define a intenção da requisição|`POST /palpite`, `GET /status`, `DELETE /ranking/3`|
|**Endpoint**|Deve representar um recurso (substantivo)|`/palpite`, `/ranking`, `/rodada`|
|**Stateless**|A API não guarda estado entre requisições|Cada chamada deve ter todas as informações|
|**Formato padrão**|Use JSON para entrada/saída|`{ "palpite": 45 }` → `{ "resultado": "menor" }`|
|**Status HTTP correto**|Ex: 200 OK, 400 Bad Request, 404 Not Found|Resposta da API com código e mensagem clara|

---

## 🧪 Exemplo RESTful para seu projeto

### 🚨 POST `/palpite`

#### Requisição:

```http
POST /palpite
Content-Type: application/json

{
  "numero": 42
}
```

#### Resposta:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "resultado": "menor",
  "tentativas": 3
}
```

### ✅ Códigos de status a usar

|   |   |
|---|---|
|Situação|Código|
|Palpite processado com sucesso|200 OK|
|Número inválido enviado (ex: < 1 ou >100)|400 Bad Request|
|Endpoint não encontrado|404 Not Found|
|Erro interno do servidor|500 Internal Server Error|

---

## 📦 Estrutura recomendada para a API

- `/palpite` (POST): envia o número e recebe se está certo, maior ou menor.
- `/rodada` (POST): reinicia o jogo com um novo número.
- `/ranking` (GET): exibe lista dos jogadores com melhor desempenho.
- `/ranking` (POST): salva nova entrada no placar.

---

## ✅ Dica: use controllers nomeados corretamente

Em .NET:

```csharp
[ApiController]
[Route("api/[controller]")]
public class PalpiteController : ControllerBase
{
    [HttpPost]
    public IActionResult VerificarPalpite([FromBody] PalpiteDTO palpite)
    {
        // lógica aqui
    }
}
```

> O endpoint será: `POST /api/palpite`**
using Microsoft.AspNetCore.Mvc; // Importa as funcionalidades de controle de rotas e model binding do ASP.NET Core

// Cria o builder da aplicação, carregando configurações, serviços e dependências
var builder = WebApplication.CreateBuilder(args);

// Configura o serviço de CORS (Cross-Origin Resource Sharing)
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirFrontend", policy =>
    {
        // Permite que o frontend (React em localhost:3000) faça requisições a esta API
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()   // Autoriza qualquer cabeçalho HTTP
              .AllowAnyMethod();  // Autoriza qualquer método HTTP (GET, POST, etc.)
    });
});

// Adiciona serviços para gerar documentação OpenAPI/Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Constrói a aplicação com as configurações acima
var app = builder.Build();

// Ativa o CORS usando a política configurada
app.UseCors("PermitirFrontend");

// Se estiver em ambiente de desenvolvimento, habilita o Swagger UI
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();      // Gera o JSON do Swagger
    app.UseSwaggerUI();    // Fornece a interface web para visualizar e testar a API
}

// Redireciona todas as requisições HTTP para HTTPS
app.UseHttpsRedirection();

// Define o endpoint GET /adivinha para gerar um número secreto aleatório
app.MapGet("/adivinha", () =>
{
    var random = new Random();
    var numeroSecreto = random.Next(1, 101); // Gera número entre 1 e 100
    return Results.Ok(new { NumeroSecreto = numeroSecreto });
})
.WithName("GetRandomNumber")    // Nome interno da rota
.WithSummary("Gera um número aleatório entre 1 e 100")       // Resumo para a documentação
.WithDescription("Este endpoint gera um número aleatório entre 1 e 100 para ser adivinhado pelo usuário.")
.WithTags("Adivinhação");      // Agrupa este endpoint na tag "Adivinhação" no Swagger

// Define o endpoint POST /adivinha para receber o palpite do usuário
app.MapPost("/adivinha", ([FromBody] PalpiteDTO dados) =>
{
    var palpite = dados.Palpite;
    var numeroSecreto = dados.NumeroSecreto;

    // Valida se o palpite está dentro do intervalo permitido
    if (palpite < 1 || palpite > 100)
    {
        return Results.BadRequest("O palpite deve ser um número entre 1 e 100.");
    }

    // Compara o palpite com o número secreto e retorna a resposta apropriada
    if (palpite == numeroSecreto)
    {
        return Results.Ok("Parabéns! Você acertou!");
    }
    else if (palpite < numeroSecreto)
    {
        return Results.Ok("Seu palpite é muito baixo. Tente novamente.");
    }
    else
    {
        return Results.Ok("Seu palpite é muito alto. Tente novamente.");
    }
})
.WithName("GuessNumber")
.WithSummary("Verifica o palpite do usuário")
.WithDescription("Este endpoint verifica o palpite do usuário em relação ao número gerado aleatoriamente. Retorna uma mensagem indicando se o palpite está correto, é muito baixo ou muito alto.")
.WithTags("Adivinhação");

// Inicia a aplicação e passa a ouvir as requisições HTTP
app.Run();
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/adivinha", () =>
{
    var random = new Random();
    var numeroSecreto = random.Next(1, 101);
    return Results.Ok(new { NumeroSecreto = numeroSecreto });
})

.WithName("GetRandomNumber")
.WithSummary("Gera um número aleatório entre 1 e 100")
.WithDescription("Este endpoint gera um número aleatório entre 1 e 100 para ser adivinhado pelo usuário.")
.WithTags("Adivinhação");

app.MapPost("/adivinha", (int palpite, int numeroSecreto) =>
{
    if (palpite < 1 || palpite > 100)
    {
        return Results.BadRequest("O palpite deve ser um número entre 1 e 100.");
    }

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

app.Run();
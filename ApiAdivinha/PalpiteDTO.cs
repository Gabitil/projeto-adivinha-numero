/// <summary>
/// Representa um palpite enviado pelo usuário, contendo o valor escolhido e o número secreto a ser adivinhado.
/// </summary>
/// <param name="Palpite">Valor inteiro chutado pelo usuário.</param>
/// <param name="NumeroSecreto">Número secreto que serve de referência para validação do palpite.</param>
public record PalpiteDTO(int Palpite, int NumeroSecreto);

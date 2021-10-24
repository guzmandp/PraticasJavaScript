// pedir o preço de um produto
// -- (alternativa: pedir para escolher entre alguns produtos, cada um com um preço)
// perguntar se o usuário deseja pagar a vista ou parcelado
// se escolher pagar a vista, aplicar um desconto de 10%
// se escolher parcelar, perguntar em quantas vezes (até 6)
//  -- aplicar um acréscimo de 1.5% * a quantidade de parcelas
// informar a forma de pagamento e o valor final

let precoProduto = Number(prompt("Digite o preço do produto:"));
var parcelas = Number(prompt("Digite forma de pagamento 1x ate 6x:"));

console.log(
  `Preço do produto, ${precoProduto}  Quantidade do Parcelas ${parcelas}!`
);

if (parcelas > 0 && parcelas < 7) {
  if (parcelas == 1) {
    console.log(
      `Pagamento a vista valor: ${precoProduto - (precoProduto * 10) / 100}`
    );
  } else if (parcelas == 2) {
    console.log(
      `Pagamento parcela 2x valor: ${
        (precoProduto * 1.5) / 100 + precoProduto / 2
        // `Pagameto parcela 2x valor: ${
        //   (precoProduto * 0.02 + precoProduto) / 2
      } cada`
    );
  } else if (parcelas == 3) {
    console.log(
      `Pagamento parcela 3x valor: ${(
        (precoProduto * 0.03 + precoProduto) /
        3
      ).toFixed(2)} cada`
    );
  } else if (parcelas == 4) {
    console.log(
      `Pagamento parcela 4x valor: ${
        (precoProduto * 4.5) / 100 + precoProduto / 4
      } cada`
    );
  } else if (parcelas == 5) {
    console.log(
      `Pagamento parcela 5x valor: ${
        (precoProduto * 5.5) / 100 + precoProduto / 5
      } cada`
    );
  } else if (parcelas == 6) {
    console.log(
      `Pagamento parcela 6x valor: ${
        (precoProduto * 6.5) / 100 + precoProduto / 6
      } cada`
    );
  } else {
    alert("Valor inválido, precisa ser entre 1 e 6 parcelas");
  }
}
alert("Inspecionar na console! bye!");

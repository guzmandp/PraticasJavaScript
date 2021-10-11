let nome = prompt("Digite seu Nome");
let sobreNome = prompt("Digite seu Sobrenome");
let idade = Number(prompt("Digite sua Idade"));
let nacionalidade = prompt("Digite sua nacionalidade");
let comida = prompt("Digite seu prato de comida preferida");

{
  console.log("Olá, " + nome + " " + sobreNome + ", é um Prazer!");
  console.log("Sua Idade é: " + idade);
  console.log("Sua Nacionalidade é: " + nacionalidade);
  console.log("Seu prato de comida preferida é: " + comida);
}

alert("Olá, " + nome + " " + sobreNome + ", é um Prazer! ");

DadosPessoa = {
  Nome: nome,
  Sobrenome: sobreNome,
  Idade: idade,
  Nacionalidade: nacionalidade,
  Comida_preferida: comida,
};

console.table(DadosPessoa);

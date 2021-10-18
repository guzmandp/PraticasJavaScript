class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

let pessoas = [];
let novoCadastro = "s";
let contador = 0;

while (novoCadastro === "s" || novoCadastro === "S") {
  contador += 1;
  console.log("CADASTRO DE PESSOA nº " + contador);

  let nome = prompt("Digite seu nome");
  let idade = Number(prompt("Digite sua idade"));

  console.log(`Cadastro feito: ${nome} com ${idade} anos.`);

  let cadastro = new Pessoa(nome, idade);

  pessoas.push(cadastro);

  novoCadastro = prompt("CADASTRAR OUTRA PESSOA? (s/n)");
}

if (pessoas.length > 1) {
  let pessoaPorIdade = pessoas.sort((a, b) => a.idade - b.idade);
  let idadeMaior = pessoaPorIdade[pessoaPorIdade.length - 1];
  velho = `${idadeMaior.nome} de ${idadeMaior.idade} anos, é a pessoa mais Velha`;
  console.log(velho);
}

alert(contador + " pessoas cadastradas com Sucesso!");

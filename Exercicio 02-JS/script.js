let nomePrimeiraPessoa = prompt("Digite seu nome:");
let idadePrimeiraPessoa = Number(prompt("Digite sua idade:"));

let nomeSegundaPessoa = prompt("Digite seu nome:");
let idadeSegundaPessoa = Number(prompt("Digite sua idade:"));

{
  console.log(
    "Olá, " + nomePrimeiraPessoa + " e " + nomeSegundaPessoa + ", é um Prazer!"
  );
}

alert(
  "Olá, " + nomePrimeiraPessoa + " e " + nomeSegundaPessoa + ", é um Prazer! "
);

let primeiraPessoa = {
  nomePrimeiraPessoa: nomePrimeiraPessoa,
  idadePrimeiraPessoa: idadePrimeiraPessoa,
};

let SegundaPessoa = {
  nomeSegundaPessoa: nomeSegundaPessoa,
  idadeSegundaPessoa: idadeSegundaPessoa,
};

if (primeiraPessoa.idadePrimeiraPessoa > SegundaPessoa.idadeSegundaPessoa) {
  console.log(nomePrimeiraPessoa + ", Você é maior que: " + nomeSegundaPessoa);
} else if (
  primeiraPessoa.idadePrimeiraPessoa < SegundaPessoa.idadeSegundaPessoa
) {
  console.log(nomePrimeiraPessoa + ", Você é menor que: " + nomeSegundaPessoa);
} else {
  console.log(
    nomePrimeiraPessoa +
      " e " +
      nomeSegundaPessoa +
      ", Vocês Tem a Mesma Idade."
  );
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

let pesquisarCep = async () => {
  //   limparFormulario();

  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("error: " + error);
    });
};

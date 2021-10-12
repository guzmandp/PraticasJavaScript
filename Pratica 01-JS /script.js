//pedir as notas de 3 avaliacões
//caluclar a media
// ----se a media for maior ou igual a 6
// exibir que o alumno foi aprovado
//---senao
/// exibir que o alumno nao foi aprovado

let primeiraNota = Number(prompt("Digite sua primeira nota:"));
let segundaNota = Number(prompt("Digite sua segunda nota:"));
let terceiraNota = Number(prompt("Digite sua terceira nota:"));

let mediaAlumno = (primeiraNota + segundaNota + terceiraNota) / 3;

console.log("A media do aluno é:" + mediaAlumno);

if (mediaAlumno >= 6) {
  console.log("Alumno foi Aprovado");
} else {
  console.log("Alumno NÂO foi aprovado");
}

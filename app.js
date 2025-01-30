//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let friendList = [];

function adicionarAmigo() {
  let friendName = document.getElementById("amigo").value;
  validarEntrada(friendName);
}

function validarEntrada(friendName) {
  if (friendName === "") {
    alert("O campo está vázio, informe um nome para continuar.");
  } else {
    friendList.push(friendName);
    friendName.value = "";
  }
}

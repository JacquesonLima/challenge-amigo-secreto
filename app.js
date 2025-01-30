//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let friendList = [];

function adicionarAmigo() {
  let friendName = document.getElementById("amigo").value;
  validarEntrada(friendName);
  limparCampo();
  visualizarLista();
}

function limparCampo() {
  document.getElementById("amigo").value = "";
}

function validarEntrada(friendName) {
  if (friendName === "") {
    alert("Por favor, insira um nome.");
  } else {
    friendList.push(friendName);
  }
}

function visualizarLista() {
  let friendListField = document.getElementById("listaAmigos");
  friendListField.innerHTML = friendList;
}

function sortearAmigo() {
  let variable = parseInt(Math.random() * friendList.length);
  if (friendList.length === 0) {
    alert("Nenhum amigo foi adicionado.");
  } else {
    let sortedFriend = friendList[variable];
    let result = document.getElementById("resultado");
    result.innerHTML = sortedFriend;
  }
}

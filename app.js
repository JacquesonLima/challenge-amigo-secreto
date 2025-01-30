//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let friendList = [];

function adicionarAmigo() {
  let friendName = document.getElementById("amigo").value;
  friendName.value = "";
  return friendList.push(friendName);
}
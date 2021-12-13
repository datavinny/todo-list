const botaoTarefa = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
const tarefas = document.getElementsByTagName('li');
const botaoApagar = document.getElementById('apaga-tudo');

function createTask() {
  const createElementLi = document.createElement('li');
  createElementLi.innerText = input.value;
  listaTarefa.appendChild(createElementLi);
  input.value = '';
  percorrerTarefas();
}
botaoTarefa.addEventListener('click', createTask);

function clearTask() {
  input.value = '';
  // const deletar = listaTarefa.childNodes;
  // for (let index = 0; index < tarefas.length; index += 1) {
    // listaTarefa.removeChild(deletar[index]);
  // }
  listaTarefa.innerHTML = '';
}
botaoApagar.addEventListener('click', clearTask);

function highLight(event) {
  const highlight = document.querySelector('.highlight');
  if (highlight !== null) {
    highlight.classList.remove('highlight');
  }
  event.target.classList.add('highlight');
}

function completar(event) {
  const completed = document.querySelector('.completed');
  if (completed !== null) {
    completed.classList.remove('completed');
  }
  event.target.classList.add('completed');
}

function percorrerTarefas() {
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('click', highLight);
    tarefas[index].addEventListener('dblclick', completar);
  }
}

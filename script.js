const botaoTarefa = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
const tarefas = document.getElementsByTagName('li');
const botaoApagar = document.getElementById('apaga-tudo');
const botaoClear = document.getElementById('remover-finalizados');

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
  listaTarefa.innerHTML = '';
}
botaoApagar.addEventListener('click', clearTask);

function clearCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    completed[index].remove();
  }
}
botaoClear.addEventListener('click', clearCompleted);

function highLight(event) {
  const highlight = document.querySelector('.highlight');
  if (highlight !== null) {
    highlight.classList.remove('highlight');
  }
  event.target.classList.add('highlight');
}

function completar(event) {
  if (event.target.classList[0] === 'completed' || event.target.classList[1] === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function percorrerTarefas() {
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('click', highLight);
    tarefas[index].addEventListener('dblclick', completar);
  }
}

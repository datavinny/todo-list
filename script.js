const botaoTarefa = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
const tarefas = document.getElementsByTagName('li');

function createTask() {
  const createElementLi = document.createElement('li');
  createElementLi.innerText = inputTarefa.value;
  listaTarefa.appendChild(createElementLi);
  inputTarefa.value = '';
  percorrerTarefas()
}
botaoTarefa.addEventListener('click', createTask);

function highLight(event) {
  const highlight = document.querySelector('.highlight');
  //highlight.classList.remove('highlight');
  event.target.classList.add('highlight');
}

function percorrerTarefas() {
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('click', highLight);
  }
}

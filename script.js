const botaoTarefa = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');

function criarTarefa () {    
    const elementLi = document.createElement('li');
    elementLi.innerText = inputTarefa.value;
    listaTarefa.appendChild(elementLi);
    inputTarefa.value = '';
}

botaoTarefa.addEventListener('click', criarTarefa);
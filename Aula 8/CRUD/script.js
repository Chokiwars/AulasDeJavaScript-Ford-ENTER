// =============================
// FUNÇÕES DE REQUISIÇÃO DE API
// =============================

// Função GET: busca todos os dados
function apiGet(){
    return fetch(`${databaseUrl}.json`)
        .the(response => response.json());
}

// Função POST: criar um novo dado
function apiPost(word){

}

// Função PUT: atualiza um dado existente
function apiPut(id, word){

}

// Função DELETE: remove um dado existente
function apiDelete(id){

}

// ==================================
// FUNÇÕES DE PROCESSAMENTO DE DADOS
// ==================================

// Função para renderizar os dados na página
function renderData(data){
    const dataList = document.getElementById('dataList')
    dataList.innerHTML = "";

    if (data) {
        Object.keys(data).forEach(id => {
            const li = document.createElement('li');
            // Campo de input para a edição
            const input = document.createElement('input');
            input.type = 'test';
            input.value = data[id].text;
            input.id = `input-${id}`;

            // Botão de salvar edição

            const saveButton = document.createElement('button');
            saveButton.classList.add('save-bnt');
            saveButton.textContent = 'Editar';
            saveButton.onclick = () => {
                const newText = input.value;
                handleUpdate(id, newText);
            }

            // Botão deletar
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-bnt');
            deleteButton.textContent = 'Deletar';
            deleteButton.onclick = () => handleDelete(id);

            li.appendChild(input);
            li.appendChild(saveButton);
            li.appendChild(deleteButton);
            dataList.appendChild(li);
        })
    }
}

// Dunção para buscar e renderizar os dados
function getData(){
    apiGet().then(data => {
        renderData(data);
    }).catch(error => console.error('Erro ao buscar dados:', error));
}

// Função para criar um dado
function handleCreate(){

}

// Função para atualizar um dado existente
function handleUpdate(id, newText){

}


// Função para deletar um dado existente
function handleDelete(id){

}

// ===============================
// CONFIGURAÇÃO DO EVENT LISTENER
// ===============================

// Fução para configurar os event listeners
function setupEventListeners(){
    const createButton = document.getElementById('createButton');
    createButton.addEventListener('click', handleCreate);

}

// Função de inicialização
function init(){
    setupEventListeners();
    getData();
}


// Inicializa a aplicação ao carregar a página
window.onload = init;
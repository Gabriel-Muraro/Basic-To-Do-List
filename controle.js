let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');


function addTarefa() {
    //pega valor digitado no campo input
    let valorInput = input.value;

    //se não for vazio nem nulo nem indefinido
    if ((valorInput !== null) && (valorInput !== "") && (valorInput !== undefined)) {
        //adiciona um no contador
        ++contador;

        //ADICIONANDO UMA DIV QUANDO A FUNCTION É CHAMADA E CAI NESSA CONDIÇÃO, UTILIZANDO CRASE `` PARA INSERIR O HTML E UTILIZANDO CIFRÃO ${valorInput} PARA CHAMAR UMA VARIAVEL DENTRO DO HTML 
        let novoItem = `<div id="${contador}"class="item">
         <div onclick="marcarTarefa(${contador})" class="item-icone">
             <i id="icone_${contador}" class="mdi mdi-circle-outline"> </i>
         </div>
         <div onclick="marcarTarefa(${contador})" class="item-nome">
             ${valorInput}
         </div>
         <div class="item-botao">
             <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
         </div>

         </div>`;

        //ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;


        //ZERAR INPUT APÓS DIGITAR
        input.value = "";
        input.focus();


    }
}

function deletar(id) {

    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {

    var item = document.getElementById(id);
    var classe = item.getAttribute("class");

    if (classe == "item") {

        item.classList.add("clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);
    } else {

        item.classList.remove("clicado");
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");


    }
}

input.addEventListener("keyup", function (event) {
    //SE APERTOU ENTER QUE É A TECLA 13
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})
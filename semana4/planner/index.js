function tarefaConcluida(tarefa) {
    console.log(tarefa)
    tarefa.style.textDecoration = "Line-through"
}

function apagarTarefas(){
    document.getElementsByClassName("content").value= ""
    
}

function criarTarefa() {
    const novaTarefa = document.getElementById("novaTarefa").value 
    const diaDaSemana = document.getElementById("diaDaSemana").value
        if (novaTarefa.value === ""  || novaTarefa.value === " "){
            alert("Digite uma tarefa valida!")
        }else{
            switch(diaDaSemana){
                case "segunda":
                    document.getElementById("segunda").innerHTML += "<li onclick='tarefaConcluida(this)'>"+ novaTarefa +"</li>"
                    break;
                case "terca":
                    document.getElementById("terca").innerHTML += "<li onclick='tarefaConcluida(this)'>"+ novaTarefa +"</li>"
                    break;
                case "quarta":
                    document.getElementById("quarta").innerHTML += "<li onclick='tarefaConcluida(this)'>"+ novaTarefa +"</li>"
                    break;
                case "quinta":
                    document.getElementById("quinta").innerHTML += "<li onclick='tarefaConcluida(this)'>"+ novaTarefa +"</li>"
                    break;
                case "sexta":
                    document.getElementById("sexta").innerHTML += "<li onclick='tarefaConcluida(this)'>"+ novaTarefa +"</li>"
                    break;
                case "sabado":
                    document.getElementById("sabado").innerHTML += "<li onclick='tarefaConcluida(this)'>"+ novaTarefa +"</li>"
                    break;
                case "domingo":
                    document.getElementById("domingo").innerHTML += "<li onclick='tarefaConcluida(this)'>"+ novaTarefa +"</li>"
                    break;
            }
            document.getElementById("novaTarefa").value = ""
        }
    
    }


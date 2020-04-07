function criarTarefa() {
    const novaTarefa = document.getElementById("novaTarefa").value 
    const diaDaSemana = document.getElementById("diaDaSemana").value
 
        switch(diaDaSemana){
            case "segunda":
                document.getElementById("segunda").innerHTML += "<li>"+ novaTarefa +"</li>"
                break;
            case "terca":
                document.getElementById("terca").innerHTML += "<li>"+ novaTarefa +"</li>"
                break;
            case "quarta":
                document.getElementById("quarta").innerHTML += "<li>"+ novaTarefa +"</li>"
                break;
            case "quinta":
                document.getElementById("quinta").innerHTML += "<li>"+ novaTarefa +"</li>"
                break;
            case "sexta":
                document.getElementById("sexta").innerHTML += "<li>"+ novaTarefa +"</li>"
                break;
            case "sabado":
                document.getElementById("sabado").innerHTML += "<li>"+ novaTarefa +"</li>"
                break;
            case "domingo":
                document.getElementById("domingo").innerHTML += "<li>"+ novaTarefa +"</li>"
                break;
        }
    
    }


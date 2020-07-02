const arrayDePosts = [];

function criarPost(){
    let tituloInput = document.getElementById("titulo").value
    let autorInput = document.getElementById("autor").value
    let conteudoInput = document.getElementById("conteudo").value


    const objetoPost = {
        titulo: tituloInput,
        autor: autorInput,
        conteudo: conteudoInput
    }


    arrayDePosts.push(objetoPost)

    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("conteudo").value = ""

    imprimePosts(arrayDePosts)

}

function imprimePosts(array) {
    document.getElementById("espaco-posts").innerHTML = ""
    for(post of array){
        document.getElementById("espaco-posts").innerHTML += 
        `<h3> ${post.titulo}</h3>  
        <p> ${post.autor}</p> 
        <p> ${post.conteudo} </p>`

    }
}
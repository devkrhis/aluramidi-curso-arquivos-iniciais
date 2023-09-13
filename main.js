function tocaSom(idElementoAudio){
    // Aqui eu pego o id do elemento e uso o play que é uma função propria do js
    console.log(idElementoAudio)
    document.querySelector(idElementoAudio).play()
}


// document.querySelector('.tecla_pom').onclick = tocaSomPom

// lista de itens tá pegando todas as classe que possui tecla
const listaDeItens = document.querySelectorAll(".tecla");

for(let contador = 0; contador <= listaDeItens.length; contador++){

    // pegandoTecla estou salvando todos os itens
    const pegandoTecla = listaDeItens[contador]

    // instrumento, estou acessando pegandoTecla e acessando a classe na posição 1, lembrando que o array começa no 0
    const instrumento = pegandoTecla.classList[1]
    
    // idAudio, está fazendo uma template string, que no caso estou colocando som_nomeDaClasse, ficando dessa forma abaixo
    const idAudio = `#som_${instrumento}`

    // função anonima, para eu conseguir passar a musica pro botão que eu clickar do mouse
    pegandoTecla.onclick = function(){
        tocaSom(idAudio)   
    }

    pegandoTecla.onkeydown = function(){
        pegandoTecla.classList.add('ativa')
    }

    pegandoTecla.onkeyup = function(){
        pegandoTecla.classList.remove('ativa')
    }

}

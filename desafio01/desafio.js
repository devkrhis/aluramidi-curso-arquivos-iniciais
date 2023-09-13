const listaDeNumeros = document.querySelectorAll('input[type=button]');
// pegando todos os dados do input

const inputTel = document.querySelector('input[type=tel]');
// pegando o dado do input

for(let numeros = 0; numeros < listaDeNumeros.length; numeros++){

    const pegandoDados = listaDeNumeros[numeros]

    pegandoDados.onclick = function(){
        inputTel.value = inputTel.value + pegandoDados.value
        // passando pro input o valor que eu cliquei
    }
    
    pegandoDados.onkeydown = function(evento){
        // esse evento eu pego o dado que eu clickei do teclado, por causa do onkeydown e do evento
        if(evento.code === 'Space' || evento.code === 'Enter'){
            // Fazendo a verificação
            pegandoDados.classList.add('ativa')
        }
    }

    pegandoDados.onkeyup = function(){
        pegandoDados.classList.remove('ativa')
    }

}


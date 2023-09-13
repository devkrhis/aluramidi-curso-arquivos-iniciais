const todasTeclas = document.querySelectorAll("button")
    
const pegandoInput = document.querySelector("input")
console.log(pegandoInput)


for(let contador = 0; contador < todasTeclas.length; contador++){

    const guardandoDados = todasTeclas[contador]

    guardandoDados.onclick = function(){
        pegandoInput.value = pegandoInput.value + guardandoDados.value
        if(guardandoDados.value === 'Enviar'){
            pegandoInput.value = ''
        }
    }
}
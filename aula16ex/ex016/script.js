function contar(){
    var ninicio = Number(window.document.querySelector("input#ninicio").value)
    var nfim = Number(window.document.querySelector("input#nfim").value)
    var npasso = Number(window.document.querySelector("input#npasso").value)
    var contagem = window.document.getElementById('contagem')
    if(nfim < ninicio){
        contagem.innerHTML = `Impossível contar!`
    }else if (npasso == 0){
        alert(`Passo inválido. Considerando passo 1`)
        npasso = Number('1')
        contagem.innerHTML = ''
        for (var i = ninicio; i <= nfim; i+=npasso){ 
            contagem.innerHTML += `${i} &#128073;`
        }
        contagem.innerHTML += `&#x1F3C1;`
    }
    else{
        contagem.innerHTML = '' 
        for (var i = ninicio; i <= nfim; i+=npasso){ 
            contagem.innerHTML += `${i} &#128073;`
        }
        contagem.innerHTML += `&#x1F3C1;`
    }
    
}
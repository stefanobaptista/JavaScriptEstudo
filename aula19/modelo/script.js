var vet = []
let vetor = window.document.querySelector('select#vetor')
let resultado = window.document.querySelector('div#resultado')
function adicionar(){
    let num = window.document.querySelector('input#num')
    var numvet = Number(num.value)
    if(numvet<1 || numvet>100){
        alert('Digite um número maior que 1 e menor que 100')
    } else if(vet.indexOf(numvet) != -1){
        alert('Valor já está na lista')
    }else{
        if(vet.length == 0){
            vetor.removeChild(op_inicial)
            //alert("removeu item inical")
            vetor.style.width = "210px";
        }
        vet.push(numvet)
        //alert('inseriu')
        var item = document.createElement('option')
        item.text = `Elemento ${vet.length}:  ${numvet}`
        vetor.appendChild(item)
        var tam = vet.length
        vetor.setAttribute("size",tam)
        num.value = ''
    }
}

function finalizar(){
    if(vet.length == 0){
        alert("Seu vetor está vazio, adicione numeros")
    }else{
        let total = vet.length
        //alert(total)
        let menor = vet[0]
        let maior = vet[0]
        let soma = 0
        for(var i=0; i<total; i++){
            soma += vet[i]
            if(vet[i] < menor){
                menor = vet[i]
            }
            if(vet[i] > maior){
                maior = vet[i]
            }
        }
        resultado.innerHTML += `O tamanho do Vetor é ${total}<br>`
        resultado.innerHTML += `O menor valor do vetor  é ${menor}<br>`
        resultado.innerHTML += `O maior valor do vetor  é ${maior}<br>`
        resultado.innerHTML += `O somatorio do Vetor é ${soma}<br>`
    }
}
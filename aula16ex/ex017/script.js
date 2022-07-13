function tabuada(){
    var num = document.getElementById('num')
    var conteudo = window.document.getElementById('conteudo')
    var tabuada = window.document.getElementById('tabuada')
    if(num.value.length == 0){
        alert(`Por favor, insira um número`)
    } else{
        num = Number(num.value)
        tabuada.innerHTML=''
        tabuada.setAttribute('size', '11')
        for(var i = 0; i<=10; i++){
            var res = i*num
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${res}`
            tabuada.appendChild(item)
        }
        
    }

}
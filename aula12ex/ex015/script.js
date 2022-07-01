
function verificar(){
    var anoatual = new Date().getFullYear()
    //anoatual = anoatual.getFullYear()
    var anoform = window.document.getElementById('txtano').value
    var sexo = window.document.getElementsByName('radsex')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if((anoform <= anoatual) && (anoform != "")){
        var idade = anoatual-anoform
        var resultado = window.document.querySelector('div#resultado')
        resultado.innerHTML = `Sua idade é: ${idade}`
        if(sexo[0].checked){
            if(idade>=0 && idade<10){
                img.setAttribute('src','menino.jpg')                    
            }else if(idade<21){
                img.setAttribute('src','homem_jovem.jpg')
            }else if(idade<60){
                img.setAttribute('src','homem_maduro.jpg')
            }else{
                img.setAttribute('src','senhor.jpg')
            }
        }else{
            if(idade>=0 && idade<10){
                img.setAttribute('src','menina.jpg')                    
            }else if(idade<21){
                img.setAttribute('src','mulher_jovem.jpg')
            }else if(idade<60){
                img.setAttribute('src','mulher_madura.jpg')
            }else{
                img.setAttribute('src','senhora.jpg')
            }
        }
        resultado.innerHTML += '<p>'
        resultado.appendChild(img)
    }else{
        alert('Prencha seu ano de nascimento corretamente!')
    }
}
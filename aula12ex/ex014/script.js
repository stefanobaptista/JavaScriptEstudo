function carregar(){
    var msg = window.document.getElementById('msg')
    var divimg = window.document.getElementById('foto')
    var imag = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if(hora > 0 && hora < 12){
        divimg.innerHTML = `<img id="imagem" src="manha.jpg" alt="">
        <p>Bom dia!</p>`
        window.document.body.style.background = '#e2cd9f'
    } else if(hora > 12 && hora < 18){
        //imag.innerHTML = `<img id="imagem" src="tarde.jpg" alt="">
        //<p>Boa tarde!</p>`
        //outra forma de alterar a image
        imag.src = 'tarde.jpg'
        divimg.innerHTML += '<p>Boa tarde!</p>'
        window.document.body.style.background = '#f78742'
    } else{
        divimg.innerHTML = `<img id="imagem" src="noite.jpg" alt="">
        <p>Boa noite!</p>`
        window.document.body.style.background = '#515154'    
    }
    
}
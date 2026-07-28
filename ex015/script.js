function carregar() { // finção carregar chamada on load do bobu do html
    var msg = window.document.getElementById('msg') // pega o elemento pelo id msg
    var img = window.document.getElementById('imagem') // pega o elemento pelo id imagem
    var data = new Date() // variável data recebe o objeto date
    var hora = data.getHours() // variável hora recebe o método get hours da data

    msg.innerHTML = `Agora são ${hora} horas.` // muda o html da mensagem
    if (hora >= 5 && hora < 12) { // if hora entre 5 e 12
        img.src = 'fotomanha.png' // muda a fonte da imagem 
        document.body.style.background = 'rgb(255, 250, 94)' // muda a cor do body (pega o elemento pelo documento)
        document.body.style.color = 'black' // muda a cor do texto do body (também pelo documento)
    } else if (hora >= 12 && hora <= 18) { // if hora entre 12 e 18
        img.src = 'fototarde.png' // muda a fonte da imagem
        document.body.style.background = 'rgb(0, 238, 255)' // muda pelo document a cor do fundo
        document.body.style.color = 'whitesmoke' // muda pelo dcument a cor do texto
    } else { // senão
        img.src = 'fotonoite.png' 
        document.body.style.background = 'rgb(48, 48, 152)'
        document.body.style.color = 'whitesmoke'
    }
}


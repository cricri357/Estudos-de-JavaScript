function verificar() { // função chamada no evento onclick do botão
    var data = new Date() // objeto date
    var ano = data.getFullYear() // método get ful year pega o ano atual
    var fano = document.getElementById('txtano') // pega o elemento pelo id input do ano
    var res = document.getElementById('res') // pega o elemento pelo id do resultado

    if (fano.value.length == 0 || fano.value > ano) { // se o ano tiver tamanho 0 ou for maior do que o ano atual
        window.alert('ERRO: Tente novamente') // caixa de alerta erro

    } else { // senão der erro 
        var fsex = document.getElementsByName('radsex') // pega o elemento pelo nome
        var idade = ano - fano.value // calcula a idade pelo ano atual menos o valor do ano
        var genero = '' // declara variável genero como string
        var img = document.createElement('img') // cria uma imagem
        img.setAttribute('id', 'foto') // coloca o id da imagem como foto

        if (fsex[0].checked) { // se a primeira opção (0) está marcada
            genero = 'Homem' // genero homem 
            if (idade < 12) { // se idade menor que 12
                img.setAttribute('src', 'menino.png') // coloca o atributo da imagem
            } else if (idade < 18) {
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }

        } else {
            genero = 'Mulher'
            if (idade < 12) {
                img.setAttribute('src', 'menina.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'jovemF.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'mulher.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }

        }
        res.innerHTML = `${genero} com ${idade} anos <br>` // muda o html do resultado 
        res.appendChild(img) // a div res vai anexar um filho img, criada anteriomente
    }
}

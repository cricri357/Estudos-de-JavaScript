var botao = document.querySelector('input#botao') // pega o botão
botao.addEventListener('click', calcular) // escuta para evento click e chama função calcular

function calcular() {
    var res = document.querySelector('select#tab') // pega o select
    var valor = document.querySelector('input#valor').value // pega o valor
    if (valor.length == 0) { // se valor for nulo (tamanho = 0) exibe erro
        window.alert('Digite um valor válido!')
    } else { 
        var nValor = Number(valor) // transforma pra número o valor
        res.innerHTML = `` // zera o html do resultado

        for (var i = 1; i <= 10; i++) { // for de 1 até 10
            var item = document.createElement('option') // cria uma option
            item.text = `${nValor} x ${i} = ${nValor*i}` // muda o texto da option
            res.appendChild(item) // instancia a filha option do resultado
        }
        
    }
}
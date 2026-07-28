var botao = document.querySelector('input#botao') // query selector pega o botao
botao.addEventListener('click', contar) // event listener chama a finção contar ao clicar botao

function contar() {
    var inicio = document.querySelector('input#inicio').value // recebe os valores do inicio, fim e passo
    var fim = document.querySelector('input#fim').value
    var passo = document.querySelector('input#passo').value
    var res = document.querySelector('div#res') // recebe a div do resultado

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0 || passo == 0) { // se os valores forem nulos (tamanho da string = 0) ou o passo for 0 exibe erro
        window.alert('Digite um valor válido!')
    } else if (inicio >= fim) { // se o inicio for maior que o final exibe erro
        window.alert('Inicio deve ser menor do que o fim!')
    } else {
        var nInicio = Number(inicio) // transforma em número para realizar as contas
        var nFim = Number(fim)
        var nPasso = Number(passo)
        var contador = nInicio // contador começa igual ao inicio

        res.innerHTML = `${nInicio} --> `// exibe o valor do inicio em html
        while (contador < nFim) { // enquanto contador for menor que o fim
            contador += nPasso // adiciona o passo ao contador
            if (!(contador > nFim)) { // se contador não for menor que o fim (para evitar passar do valor do fim)
                res.innerHTML += `${contador} --> ` // adiciona ao html o contador
            }  
        }
        res.innerHTML += `FIM` // html exibe fim
    }




}

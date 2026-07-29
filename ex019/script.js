let numeros = [] // inicia o array numeros vazio

function estaContido(valor) { // função que checa se um determinado numero está contido no array
    for (let i = 0; i < numeros.length; i++) { // percorre o array checando cada valor se é o valor inserido
        if (numeros[i] == valor) {
            return true // se ecnocntrar retorna true
        }
    }
    return false // se não encorntrar retorna false
}

function soma() { // calcula a soma do array
    let sum = 0
    for (let i = 0; i < numeros.length; i++) { // percorre o array somando todos os valores
        sum += numeros[i]
    }
    return sum
} 

function avg() { // calcula a media do array
    let avg = 0
    for (let i = 0; i < numeros.length; i++) { // percorre o array somando todos os valores
        avg += numeros[i]
    }
    avg = avg/(numeros.length) // divide a soma pela quantidade de itens do array
    return avg
}

function adicionar() { // função adicionar, variaveis com query selector com cada elemento
    let tabela = document.querySelector('select#tabela')
    let valor = document.querySelector('input#valor').value
    let input = document.querySelector('input#valor')

    let res = document.querySelector('div#resultado') 
    res.innerHTML = ` ` // limpa div de resultado
    
    if (valor.length == 0) { // checa se foi digitado algum valor
        input.value = ` `
        window.alert('Digite um valor válido!')

    } else if (valor < 1 || valor > 100) { // checa se está entre 1 e 100
        input.value = ` `
        window.alert(`digite entre 1 e 100`)

    } else if (estaContido(valor)) { // checa se está contido, booleano chamando a função está contido
        input.value = ` `
        window.alert('O valor já está contido!')

    } else { // caso estiver tudo correto limpa a tabela, insere o valor no array e insere todo o array na tabela
        tabela.innerHTML = ` `
        input.value = ` `
        let nValor = Number(valor)
        numeros.push(nValor)

        for(let i = 0; i < numeros.length; i++) { // inserção dos valores do array
            let item = document.createElement('option') // cria o elemento option da tabela
            item.innerText = `Valor ${numeros[i]} adicionado!` // coloca o texto sendo o numero inserido
            tabela.appendChild(item) // instancia o elemento
        }

    }

}

function finalizar() { // função finalizar
    let res = document.querySelector('div#resultado') 
    res.innerHTML = ` ` // limpa div de resultado

    if (numeros.length == 0) { // se o array está vazio emite alerta
        window.alert('Adicione um valor válido!')
    } else {
        let res_p = document.createElement('p') // cria elemento paragrafo
        res.appendChild(res_p) // instancia o p na div resultado
        res_p.innerText = `Ao todo temos ${numeros.length} número(s) cadastrados.
        O maior valor informado foi ${Math.max(...numeros)}.
        O menor valor informado foi ${Math.min(...numeros)}.
        Somando todos os valores, temos ${soma()}.
        A média dos valores digitados é ${avg()}.`
        // muda o texto do p com os valores, chamando as funções necessarias
    }
}
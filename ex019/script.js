let numeros = [] // inicia o array numeros vazio

function estaContido(valor) { // função que checa se um determinado numero está contido no array
    for (let i = 0; i < numeros.length; i++) { // percorre o array checando cada valor se é o valor inserido
        if (numeros[i] == valor) {
            return true // se ecnocntrar retorna true
        }
    }
    return false // se não encorntrar retorna false
}

function adicionar() { // função adicionar, variaveis com query selector com cada elemento
    let tabela = document.querySelector('select#tabela')
    let valor = document.querySelector('input#valor').value
    let input = document.querySelector('input#valor')
    
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

function finalizar() {
    if (numeros.length == 0) {
        window.alert('Adicione um valor válido!')
    } else {
        
    }
}
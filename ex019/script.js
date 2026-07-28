let numeros = []

function estaContido(valor) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == valor) {
            return true
        }
    }
    return false
}

function adicionar() {
    let tabela = document.querySelector('select#tabela')
    let valor = document.querySelector('input#valor').value
    let input = document.querySelector('input#valor')
    
    if (valor.length == 0) {
        input.value = ` `
        window.alert('Digite um valor válido!')

    } else if (valor < 1 || valor > 100) {
        input.value = ` `
        window.alert(`digite entre 1 e 100`)

    } else if (estaContido(valor)) {
        input.value = ` `
        window.alert('O valor já está contido!')

    } else {
        tabela.innerHTML = ` `
        input.value = ` `
        let nValor = Number(valor)
        numeros.push(nValor)

        for(let i = 0; i < numeros.length; i++) {
            let item = document.createElement('option')
            item.innerText = `Valor ${numeros[i]} adicionado!`
            tabela.appendChild(item)
        }

    }

}

function finalizar() {
    if (numeros.length == 0) {
        window.alert('Adicione um valor válido!')
    } else {
        
    }
}
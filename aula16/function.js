function par(n) { // função (parametros)
    if (n % 2 == 0) { // se resto for 0 retorna par
        return 'par'
    } else { // se for outro valor retorna impar
        return 'impar'
    }
}

let res = par(10) // chamada da função par na variavel res
console.log(res)
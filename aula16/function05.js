function fatorial(n) { // função recurssiva
    if (n == 1) {
        console.log(n)
        return 1 // retorna 1 quando n for 1
    } else {
        console.log(n)
        return n * fatorial(n-1) // multiplica o valor de n pelo fatorial de n-1
    }
}
// a função é chamada diversas vezes e somente depois retorna cada valor de cada função aberta 

console.log(fatorial(5))

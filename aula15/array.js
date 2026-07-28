let num = [1,2,3,4,5] // declarar vetor

console.log(num) // imprime vetor com colchetes

console.log(`Esse é o vetor ${num}`) // imprime vetor em string (sem colchetes)

num[3] = 6 // adiciona 10 na posicao 3 (0,1,2,3)
console.log(num)

num.push(7) // adiciona 20 na ultima posicao
console.log(num)

console.log(num.length) // L E N G T H

num.sort() // ordena valores
console.log(num)

for (let i = 0; i < num.length; i++) { // for comum que percorre o vetor
    console.log(num[i])
}

for (let i in num) { // for in (serve para vetores, especificamente)
    console.log(`O valor na posição ${i} é ${num[i]}`)
}

console.log(num.indexOf(7)) // retorna o indice do valor 7
console.log(num.indexOf(10)) // retorna -1 pois não encontrou o valor 10
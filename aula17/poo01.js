let amigo = { // declaração de objeto
    nome: 'José', // atributos
    sexo: 'M',
    peso: 85,

    engordar(p = 0) { // método
        amigo.peso += p
    }
}

console.log(`${amigo.nome} pesa ${amigo.peso} quilos!`)
amigo.engordar(2) // chamada de método
console.log(`${amigo.nome} pesa ${amigo.peso} quilos!`)
var idade = 17 // variável

if (idade < 16) { // if menor de 16 não vota
    console.log('Não vota')
} else if (idade < 18 || idade >= 65) { // if menor que 18 ou maior que 65 opional
    console.log('Voto opcional')
} else { // senão obrigatório
    console.log('Voto obrigatório')   
}

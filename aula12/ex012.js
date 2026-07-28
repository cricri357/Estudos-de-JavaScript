var agora = new Date() // instancia o objeto agora da classe date
var hora = agora.getHours() // método get hours no objeto agora
var min = agora.getMinutes() // método get minutes no objeto agora

console.log (`Agora sâo ${hora} horas e ${min} minutos`) // console log
if (hora < 5) { // if e else if
    console.log('VAI DORMIR!!!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else if (hora <= 24) {
    console.log('Boa noite!')
}

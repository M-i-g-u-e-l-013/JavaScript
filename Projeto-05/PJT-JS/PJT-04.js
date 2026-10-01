let agora = new Date()
let horas = agora.getHours()

console.log(`Olá! Agora são ${horas}h horas.`)

if (horas < 12) {
    console.log("Bom Diaa!")
}
else if (horas >= 12 && horas <=18) {
    console.log("Boa Tarde!")
}
else {
    console.log("Boa Noite!")
}
function carregar() {
    let msg = window.document.getElementById("msg")
    let img = window.document.getElementById("imagem")
    let data = new Date()
    //let horas = data.getHours()
    let horas = 16
    msg.innerHTML = `<strong>Agora são ${horas}h horas!</strong>`

    if (horas >= 0 && horas < 12) {
        //Bom Dia!
        img.src = "imagens/IMG - Manhã.png"
        document.body.style.background = "#e2cd9f"
    }
    
    else if (horas >= 12 && horas <= 18) {
        //Boa Tarde!
        img.src = "imagens/IMG - Tarde.png"
        document.body.style.background = "#b9846f"
    }

    else {
        //Boa Noite!
        img.src = "imagens/IMG - Noite.png"
        document.body.style.background = "#515154"
    }
}

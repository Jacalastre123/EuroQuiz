const bg = document.getElementById("bg")
const colorInput = bg.querySelector("#colorInput")
const bgMus = document.getElementById("bgMus")
let colour = localStorage.getItem("colorInput") || "#55a0aa"
document.body.style.backgroundColor = colour
function submit() {
    document.body.style.backgroundColor = colorInput.value
    colour = localStorage.setItem("colorInput", colorInput.value)
    bg.close()
    
}


let musicActivator = document.addEventListener("mousemove", playing)
function playing() {
    bgMus.loop = true
    bgMus.volume = 0.8
    bgMus.play()
    document.removeEventListener("mousemove", playing)
}
function off(button) {
    
    if (bgMus.paused) {
        bgMus.play()
        button.innerText = "Turn off Music"
    }
    else {
        bgMus.pause()
        button.innerText = "Turn on Music"
    }
}

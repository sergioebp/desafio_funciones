var color = 'white'

div = document.getElementById('key')

let cambio = function(x) {
    div.style.backgroundColor = x
}



document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {
        color = 'pink'
    }
    else if (event.key === "s" || event.key === "S") {
        color = 'orange'
    }
    else if (event.key === "d" || event.key === "D") {
        color = 'lightblue'
    }
    else if (event.key === "q" || event.key === "Q" || event.key === "w" || event.key === "W" || event.key === "e" || event.key === "E") {
        cambio(color)
    }
})
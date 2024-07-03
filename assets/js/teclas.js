var color = 'white';

div = document.getElementById('key');

let cambio = function(x) {
    div.style.backgroundColor = x
};

let cuadrado = "height: 200px; width: 200px; border: solid black 5px";

let crear = function(color) {
    nuevodiv.style.width = "200px";
    nuevodiv.style.height = "200px";
    nuevodiv.style.border = "solid black 5px";
    nuevodiv.style.backgroundColor = color;
}

document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {
        color = 'pink';
        cambio(color)
    }
    else if (event.key === "s" || event.key === "S") {
        color = 'orange';
        cambio(color)
    }
    else if (event.key === "d" || event.key === "D") {
        color = 'lightblue';
        cambio(color)
    }
    else if (event.key === "q" || event.key === "Q") {
        color = 'purple';
        let nuevodiv = document.createElement("div");
        nuevodiv.style = cuadrado
        nuevodiv.style.backgroundColor = color;
        document.body.appendChild(nuevodiv)
    }
    else if (event.key === "w" || event.key === "W") {
        color = 'grey';
        let nuevodiv = document.createElement("div");
        nuevodiv.style = cuadrado
        nuevodiv.style.backgroundColor = color;
        document.body.appendChild(nuevodiv)
    }
    else if (event.key === "e" || event.key === "E") {
        color = 'brown';
        let nuevodiv = document.createElement("div");
        nuevodiv.style = cuadrado
        nuevodiv.style.backgroundColor = color;
        document.body.appendChild(nuevodiv)
    }
})
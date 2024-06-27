const ele = document.getElementById("ele1")

color = 'yellow'

ele.addEventListener("click", function(){
    ele.style.backgroundColor = (color || 'green')
});
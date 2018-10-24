let input1 = document.getElementById("message")

let outputl = document.getElementById("one")
let output2 = document.getElementById("two")


input1.addEventListener("keyup", (event) => {
    outputl.innerHTML = event.target.value
    output2.innerHTML = event.target.value

})
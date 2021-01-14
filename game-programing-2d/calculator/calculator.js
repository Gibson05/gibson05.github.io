let btn = document.querySelectorAll(".input-btn")
let input = document.querySelector("#equation")
let result = document.querySelector('#result')
let realEquation = ''
Array.from(btn).map(ele => {
    ele.addEventListener('click', function () {
        input.innerHTML += ele.innerHTML
        realEquation += ele.getAttribute('value')
    })
})

let delete_btn = document.querySelector(".delete-btn")
delete_btn.addEventListener('click', function () {
    let a = input.innerHTML
    input.innerHTML = a.substr(0, a.length - 1)
    realEquation = realEquation.substr(0, realEquation.length -1)
})

let clear_btn = document.querySelector(".clear-btn")
clear_btn.addEventListener('click', function () {
    input.innerHTML = ''
    result.innerHTML = ''
    realEquation = ''
})

let result_btn = document.querySelector(".result-btn")
result_btn.addEventListener('click', function () {
    console.log(realEquation);
    let b = eval(realEquation)
    if (isNaN(b)) {
        b = "Syntax Error"
    }
    result.innerHTML = b
    realEquation = ''
})

let square_root = document.querySelector(".squareroot")
square_root.addEventListener('click', function() {
    let a = Math.sqrt(result.innerHTML)
    result.innerHTML = a
})

let minus_btn = document.querySelector(".minus")
minus_btn.addEventListener("click", function() {
    let a = result.innerHTML
    let b = a*-1
    result.innerHTML = b
})

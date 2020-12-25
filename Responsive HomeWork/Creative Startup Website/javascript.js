let uploadBTN = document.getElementById("upload-btn")
let fileInput = document.getElementById("CV-file")

uploadBTN.addEventListener('click', function() {
    fileInput.click();
})

let scrollDownBTN = document.querySelector('.scrolldown')

scrollDownBTN.addEventListener('click', function() {
    console.log('abc');
    document.querySelector('.about-us').scrollIntoView();
})

let humburger_btn = document.querySelector(".humburger");
let b = Array.from(document.querySelectorAll(".sub-menu"));
humburger_btn.addEventListener("click", function() {
    console.log('abc');
    b.map(ele => {
        ele.classList.toggle("show");
    })
});

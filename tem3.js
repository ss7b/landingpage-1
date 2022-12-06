let headerMenu = document.querySelectorAll("#ull li a")
headerMenu.forEach(li => {
    li.addEventListener("click",function(){
        headerMenu.forEach(el => {
            el.classList.remove("active")
            this.classList.add("active")
        });
    })
})
// ---------------------------
let btn = document.getElementById("to-up");

window.onscroll= ()=>{
    if(window.scrollY >= 1500){
        btn.style.display= "block";
    }else{
        btn.style.display= "none";
    }
}
btn.onclick = ()=>{
    window.scrollTo({
        top:0,
        let:0,
        behavior: "smooth"
    })
}

let liPorto = document.querySelectorAll(".shuffel li");
let portoImg = Array.from(document.querySelectorAll(".port"))

liPorto.forEach(li => {
    li.addEventListener("click", function(){
        // remove active
        liPorto.forEach(shuffle =>{
            shuffle.classList.remove("active");
            this.classList.add("active")
        })
    })
    // filring the images
    li.addEventListener("click",filter)
});
function filter(){
    portoImg.forEach(shuf =>{
        shuf.style.display = "none"
    })
    document.querySelectorAll(this.dataset.img).forEach(el => {
        el.style.display = "block"
    })
}
// stats counter
let statsSection = document.querySelector(".stats"),
    statNum = document.querySelectorAll(".stat .nummer"),
    startCount = false;

window.onscroll = function(){
    if (window.scrollY >= statsSection.offsetTop - 500) {
        if (!startCount) {
            statNum.forEach(num => countUP(num))
        }
        startCount=true;
    }
}

function countUP(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    }, 3000 / goal);
}
let taps = Array.from(document.querySelectorAll(".taps li")),
    tapContent = Array.from(document.querySelectorAll(".content > div"))
taps.forEach(ele =>{
    ele.addEventListener("click", function(e){
        taps.forEach(ele=>{
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        tapContent.forEach(contnet=>{
            contnet.style.display = "none"
        })
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block"
    })
})


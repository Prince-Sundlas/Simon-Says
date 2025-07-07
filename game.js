let level = 0;
let gamestate = false;
let h3 = document.querySelector("h3");
let boxes = document.querySelectorAll(".box");
let gameseq = [];
let userseq = [];
document.addEventListener("keypress",()=>{
    gamestate = true;
    if(level == 0){
    level++;
    h3.innerText =`Level ${level}`;
    levelup();    
}
})
function levelup(){
    let randx = Math.floor(Math.random()*4);
    console.log(randx);
    flash(randx);
}
function flash(idx){
    let box = boxes[idx];
    box.classList.add("flash");
    setTimeout(()=>{
    box.classList.remove("flash");    
    },333)
}

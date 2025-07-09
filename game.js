let level = 0;
let h2 = document.querySelector("h2");
let gamestate = false;
let h3 = document.querySelector("h3");
let bxs = ["red","green","purple","blue"];
let boxes = document.querySelectorAll(".box");
let gameseq = [];
let userseq = [];
let highscore = 0;
if(gamestate == false){
    document.addEventListener("keypress",()=>{
    gamestate = true;
    if(level == 0){
    levelup();    
}})}
function levelup(){
    level++;
    h3.innerText =`Level ${level}`;
    let randx = Math.floor(Math.random()*4);
    console.log(randx);
    let bxe = bxs[randx];
    gameseq.push(bxe);
    console.log(gameseq);
    // flash(bxe);
    userseq = [];
     let i = 0;
    let interval = setInterval(()=>{
        flash(gameseq[i]);
        i++;
        if(i >= gameseq.length){
            clearInterval(interval);
        }
    }, 600); 
     setTimeout(()=>{
        flash(bxe);
    }, gameseq.length * 590);
}
function flash(idx){
    let box = document.querySelector(`.${idx}`);
    box.classList.add("flash");
    setTimeout(()=>{
    box.classList.remove("flash");    
    },233)
    
}
function btnclick(){
   let color = this.classList[1]; // assuming the second class is the color
    flash(color);
    userseq.push(color);
    checkans(userseq.length - 1);
}
for (box of boxes){
    box.addEventListener("click", btnclick);
}
function checkans(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(()=>{
                levelup();
            },773);
        }
        console.log("Game done");
    }
    else{
        h3.innerText = "Game over Press any key to start again";
        let b = document.querySelector("body");
        b.style.backgroundColor = "red";
        setTimeout(()=>{
            b.style.backgroundColor = "white";
        },200);
        reset();
    }
}
function reset (){
    if(level >= highscore){
        highscore = level;
    }
    h2.innerText =`High Score:${highscore}`;
    level = 0;
    gamestate = false;
    gameseq = [];
    userseq = []; 
}


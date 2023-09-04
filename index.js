let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
   if(started == false){
    console.log("game started");
    started=true;
    leveUp();
   }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){ 
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function leveUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`

    let randIdex =Math.floor(Math.random()*3);
    let randColor=btns[randIdex];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}
function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(leveUp,1000);
    }

    }else{
        h2.innerHTML=`Game Over ! Your score was <b>${level}</b> <br>press any key to start`; 
        document.querySelector("body").style.color="red";

        setTimeout(function(){
            document.querySelector("body").style.color="q";

        });
        reset();    
    }   

}


function btnPress(){
    let btn=this;
    userFlash(btn);

    uaserColor=btn.getAttribute("id");
 userseq.push(uaserColor);
    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
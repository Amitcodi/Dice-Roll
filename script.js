let player =document.querySelectorAll("input");

let btn =document.querySelectorAll(".dice");
let score =document.querySelectorAll("span");

let win = document.querySelector("#win");
let winner = document.querySelector("#winner");

win.disabled = true;

for(let t of btn){
    t.addEventListener("click",playthegame);
}


let count =0;

function playthegame(e){
    let splyno =e.target;
    splyno.disabled=true;
    let plyno =e.target.id.slice(3);
    let pindex =plyno-1;
    console.log(pindex)

    count++;
    if(count==5){
        win.disabled=false;
    }
    let pvalue=[1,2,3,4,5,6];
    let random = pvalue[Math.floor(Math.random()*pvalue.length)];
    console.log(random);


    score[pindex].innerText = `${random}`;
}


win.addEventListener("click",winnerfind);

function winnerfind(){

    let max = 0;
    for(let t of score){
        let inscore =t.innerText;
      if(inscore>max){
        max=inscore;
      }
    }
    let winnerlist =[];
    for(let i=0;i<score.length;i++){
        let v =score[i].innerText;
        if(v==max){
            winnerlist.push(i);
        }
    }
    console.log(winnerlist);


    let namelist = [];
    for(let t of winnerlist){
        let name =player[t].value;
        namelist.push(name);
    }
        winner.innerText =` Winner is ${namelist.join(",")}`
    
}
let boxes=document.querySelectorAll(".box");
let Game=document.querySelector(".game");
let newGame=document.querySelector("#ngame");
let resetGame=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let msgCnt=document.querySelector(".msg-cont");



let turn0=true;
let clickC=0;
let winner=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    
];

let rGame=()=>{
  turn0=true;
  enable();
  msgCnt.classList.add("hide")
  clickC=0;
}

boxes.forEach(box => {
  box.addEventListener("click",()=>{
    console.log("Box is clicked");
    if(turn0){
      box.innerHTML="O";
      box.style.color="black";
      turn0=false;
    }
    else{
      box.innerHTML="X";
      box.style.color="red";
      turn0=true;
    }
    clickC++;
    box.disabled=true;
    checkWinner();
  });
  
});
let disable=()=>{
  for(let box of boxes){
    boxes.disable=true;
  }
}

let enable=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

let showinner=(winner)=>{
  msg.innerText=`Congratulations The Winner is ${winner}`;
  msgCnt.classList.remove("hide");
  disable();
}

const checkWinner=()=>{
for (let pattern of winner){
 let pos1=boxes[pattern[0]].innerText;
 let pos2=boxes[pattern[1]].innerText;
 let pos3=boxes[pattern[2]].innerText;


 
   if(pos1!="" && pos2!="" && pos3!="" ){
    if(pos1===pos2 && pos2===pos3){
    console.log("Winner",pos1);
    showinner(pos1);
    }
   else if(clickC===9){
    msg.innerText="Match Drawn";
   }
   }
   }
   
 }


ngame.addEventListener("click",rGame);
reset.addEventListener("click",rGame);

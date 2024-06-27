const boxes=document.querySelectorAll(".box");
const resetbtn=document.getElementById("resetbtn");
let newgamebtn=document.querySelector("#newgamebtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let true0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach(box=>
    {
        box.addEventListener("click",event=>
            {
              if(true0){
               box.innerText="0";
            true0=false;}
              else{
                box.innerText="X"
                true0=true;
              }
              box.disabled=true;
            
              checkwinner();
            }
             
        )
    }
)

const resetGame=()=>{
     true0=true;
     enabledBoxes();
     msgcontainer.classList.add("hide");
}

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner) =>{
      msg.innerText=`Congratulations winner is ${winner}`
      
      msgcontainer.classList.remove("hide");
      disabledBoxes();
    }

const checkwinner=()=>{
     for(let  pattern of winPatterns){
 
        let pos1=    boxes[pattern[0]].innerText;
            pos2=    boxes[pattern[1]].innerText;
            pos3=    boxes[pattern[2]].innerText;

            if(pos1!="" && pos2!="" && pos3!=""){
                if(pos1 === pos2 && pos2 === pos3){
                    console.log("winner",pos1);
                     showWinner(pos1);
                }
            }
    
}
}


newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
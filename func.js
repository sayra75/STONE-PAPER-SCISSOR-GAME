var useroutput=0;
var compoutput=0;
var userscore= document.querySelector("#score");
var computerscore= document.querySelector("#compscore");

  var choices= document.querySelectorAll(".choice");
  const msg= document.querySelector("#result");
  
  choices.forEach((choice)=>{
      choice.addEventListener("click",()=>{
        var userchoice =choice.getAttribute("id");
        playgame(userchoice);
      })
  })
  const generateno =()=>{
     const options=["rock", "paper", "scissor"];
     const compchoice= Math.floor(Math.random()*3);
    return  options[compchoice];
  };
  const playgame = (userchoice) => {
    
    var computerchoice=generateno();
    if(userchoice===computerchoice){
        result.innerText=` game draw ! both choose ${userchoice}`;
        result.style.backgroundColor= "#081b31";
    }
    
    else{
        let userwin = true;
        if(userchoice==="rock"){
        userwin= computerchoice==="paper"? false : true;    
    }

        else if(userchoice==="paper") {
            userwin= computerchoice==="rock"?true : false;
        }

        else  {
            userwin= computerchoice==="paper"?true : false;
        }
        showwinner(userwin, userchoice, computerchoice);
        }
       
  };
  const showwinner=(userwin,userchoice,computerchoice) => {
       if (userwin){
        useroutput++;
        userscore.innerText= useroutput;
       result.innerText=`you win !! ${userchoice} beats ${computerchoice}`;
       result.style.backgroundColor="green";
       }
       else{
        compoutput++;
        computerscore.innerText=compoutput;
        result.innerText=`you lose !! ${computerchoice} beats ${userchoice}`;
        result.style.backgroundColor="red";
       }
  }

  

let win=0;
let draw=0;
let lose=0;
let playtime=0;
let count=0;
let Player_Choice;
let Playagain;

function sum(a,b){
  return a+b;
}

function checkwin(win,lose){
    if (sum(win,lose)==3) {

      removeButton("Stone")
      removeButton("Paper")
      removeButton("Scissor")
      if(win>1 || (win==1 && draw==2)){
        (document.getElementsByClassName("result"))[0].innerHTML= "";
        (document.getElementsByClassName("Question"))[0].innerHTML= `YOU WIN THE TOURNAMNET...your score is ${win}/3`
        Playagain= document.getElementById("Play_again_options");
        Playagain.getElementById("Play_again").innerHTML= `Do you want to play again?`
        // addButton1("Play_again_options","Yes")
        // addButton1("Play_again_options","No")
        
      }
      else if(lose>1 || (lose==1 && draw==2)){
        (document.getElementsByClassName("result"))[0].innerHTML= "";
        (document.getElementsByClassName("Question"))[0].innerHTML= `YOU LOSE THE TOURNAMNET...your score is ${win}/3`
      //   (document.getElementsByClassName("Play_again_options"))[0].innerHTML= `Do you want to play again?`;
        // addButton1("Play_again_options","Yes");
        // addButton1("Play_again_options","No");
      }
      
    }

}



function Player_Choiceing(buttonName){

  (document.getElementsByClassName("tour_result"))[0].innerHTML= ""

  if(buttonName=="Stone"){
      Player_Choice="stone"
      console.log(Player_Choice)
  }
  else if(buttonName=="Paper"){
      Player_Choice="paper"
      console.log(Player_Choice)
  }
  else if(buttonName=="Scissor"){
      Player_Choice="Scissor"
      console.log(Player_Choice)
  }
  else{
    if(buttonName=="Yes"){
      start_game()
    }
    else{
      end_game()
    }
  }
  Play_game() ;   
}
    

function generateRandom(){
    let arr = ["STONE", "PAPER", "SCISSOR"]
    let r = Math.floor((Math.random() * 3));
    let pcChoice = arr[r];
    console.log(pcChoice);
    return pcChoice;
}


function Play_game(){
  playtime++
  let x = generateRandom();
  Player_Choice = Player_Choice.toUpperCase();
  
  if (Player_Choice == x) {
    (document.getElementsByClassName("result"))[0].innerHTML= `IT'S A DRAW....your choice was ${Player_Choice} and computer was ${x}`;
    (document.getElementsByClassName("tour_result"))[0].innerHTML= `Plz choose again. !!!`
        
  }
  else if (x == "STONE" && Player_Choice == "PAPER") {
    (document.getElementsByClassName("result"))[0].innerHTML= `YOU WIN....your choice was  ${Player_Choice} and computer was ${x}`
    win++
    console.log(win)
  }
  else if (x == "STONE" && Player_Choice == "SCISSOR") {
    (document.getElementsByClassName("result"))[0].innerHTML= `YOU LOSE....your choice was ${Player_Choice} and computer was ${x}`
    lose++
  }
  else if (x == "PAPER" && Player_Choice == "STONE") {
    (document.getElementsByClassName("result"))[0].innerHTML= `YOU LOSE....your choice was ${Player_Choice} and computer was ${x}`
    lose++
  }
  else if (x == "PAPER" && Player_Choice == "SCISSOR") {
    (document.getElementsByClassName("result"))[0].innerHTML= `YOU WIN....your choice was ${Player_Choice} and computer was ${x}`
    win++
  }
  else if (x == "SCISSOR" && Player_Choice == "STONE") {
    (document.getElementsByClassName("result"))[0].innerHTML= `YOU WIN....your choice was ${Player_Choice} and computer was ${x}`
    win++  
    console.log(win)
  }
  else if (x == "SCISSOR" && Player_Choice == "PAPER") {
    (document.getElementsByClassName("result"))[0].innerHTML= `YOU LOSE....your choice was ${Player_Choice} and computer was ${x}`
    lose++
  } 
  
  checkwin(win,lose)
}
function addButton(class_name,buttonName){
    var container = document.getElementById(class_name);
    var button = document.createElement("button");
    button.innerHTML = buttonName;
    button.id=buttonName;
    container.appendChild(button);
    button.onclick=function(){Player_Choiceing(buttonName)};
   
}
function addButton1(class_name,buttonName){
  var container = document.getElementById(class_name);
  var button = document.createElement("button");
  button.innerHTML = buttonName;
  button.id=buttonName;
  container.appendChild(button);
  button.onclick=function(){PlayAgain(buttonName)};
 
}
function PlayAgain(buttonName){
  if(buttonName=="Yes"){
    start_game()
  }
  else{
    end_game()
  }
}

 


function removeButton(buttonId){
    var button = document.getElementById(buttonId);
    button.parentNode.removeChild(button);
}

let end_game=()=>{
    
    
    (document.getElementsByClassName("Question"))[0].innerHTML="That\'s cool, Thank you for visiting"
    
    removeButton("no")
    return;
    
}
  
let start_game=()=>{
    
    (document.getElementsByClassName("Question"))[0].innerHTML= "Choose one from the three given below"
    removeButton("No");
    removeButton("Yes");
    addButton("game_options","Stone");
    addButton("game_options","Paper");
    addButton("game_options","Scissor");  
}
  
  
  
  
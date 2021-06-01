// document.querySelector("button").addEventListener("click",handleClick);
// document.querySelectorAll("button")[1].addEventListener("click",handleClick);
// document.querySelectorAll("button")[2].addEventListener("click",handleClick);
// document.querySelectorAll("button")[3].addEventListener("click",handleClick);
// document.querySelectorAll("button")[4].addEventListener("click",handleClick);
// document.querySelectorAll("button")[5].addEventListener("click",handleClick);
// document.querySelectorAll("button")[6].addEventListener("click",handleClick);
// function handleClick(){
// alert("i got clicked");
// }

// or do it this way for a shorter line of code

var eachButton = document.querySelectorAll(".drum").length;
for (let i = 0; i < eachButton; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  
}

function handleClick(){
var buttonInnerHtml = this.innerHTML;
pressButton(buttonInnerHtml) ;
animationButton(buttonInnerHtml);
}

document.addEventListener("keypress" , function(event){
pressButton(event.key) ;
animationButton(event.key);
});

function pressButton(key) {
  switch (key) {
    case "w":
     var audio = new Audio("sounds/crash.mp3"); 
     audio.play();
       break;
 
       case "a":
     var audio = new Audio("sounds/kick-bass.mp3"); 
     audio.play();
       break;
 
       case "s":
     var audio = new Audio("sounds/snare.mp3"); 
     audio.play();
       break;
 
       case "d":
     var audio = new Audio("sounds/tom-1.mp3"); 
     audio.play();
       break;
 
       case "j":
     var audio = new Audio("sounds/tom-2.mp3"); 
     audio.play();
       break;
 
       case "k":
     var audio = new Audio("sounds/tom-3.mp3"); 
     audio.play();
       break;
 
       case "l":
          var audio = new Audio("sounds/tom-4.mp3"); 
          audio.play();
            break;
    
 
    default:console.log(buttonInnerHtml);
      
 
 }
 
}


function animationButton(currentKey) {
  
  var activeButton = document.querySelector("." + currentKey );
  activeButton.classList.add("pressed");
  

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)
    

}
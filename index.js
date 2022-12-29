var randomNumber1=Math.floor((Math.random()*6))+1;
var randomNumber2=Math.floor((Math.random()*6))+1;
console.log(randomNumber1);
console.log(randomNumber2);
document.getElementById("img1").src=`./images/dice${randomNumber1}.png`;
document.getElementById("img2").src=`./images/dice${randomNumber2}.png`;
if (randomNumber1>randomNumber2) {
document.querySelector("h1").innerHTML="Player1 wins";    
} 
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player2 wins";    

}
else {
    document.querySelector("h1").innerHTML="DRAW";    

}

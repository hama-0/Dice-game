var randomNum1=Math.random();
randomNum1=randomNum1 * 6 ;
randomNum1=Math.floor(randomNum1) + 1;
console.log(randomNum1);

if(randomNum1 == 1){
    document.querySelector("img").setAttribute("src","./images/dice1.png")
}else if(randomNum1 == 2){
    document.querySelector("img").setAttribute("src","./images/dice2.png")
}else if(randomNum1 == 3){
    document.querySelector("img").setAttribute("src","./images/dice3.png")
}else if(randomNum1 == 4){
    document.querySelector("img").setAttribute("src","./images/dice4.png")
}else if(randomNum1 == 5){
    document.querySelector("img").setAttribute("src","./images/dice5.png")
}else {
    document.querySelector("img").setAttribute("src","./images/dice6.png")
}+ 1
var randomNum2=Math.floor((Math.random()* 6))+1; 
console.log(randomNum2);
varImage = "./images/dice"+randomNum2+".png";

document.querySelectorAll("img")[1].setAttribute("src",varImage);
if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML="یەکەم بردیەوە";

}else if (randomNum1 < randomNum2){ document.querySelector("h1").innerHTML="دووەم بردیەوە";

}else{
    document.querySelector("h1").innerHTML="یەکسان";
}
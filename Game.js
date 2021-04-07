let btn=document.getElementById("btn");
let output=document.getElementById("outputtext");

let number = Math.floor(Math.random()*100);

btn.addEventListener('click',function(){

    let input=document.getElementById('userinput').value;
    if(input== number){
        output.innerHTML=`You Guessed it right.Your number is ${number}`
    }else if(input<number){
        output.innerHTML="You Guessed it low!"
    };if(input>number){
        output.innerHTML="You Guessed it High!"
    }
})
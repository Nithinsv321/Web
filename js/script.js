//interval
let mode = false;
setInterval(()=>{
    let print = document.getElementById('one').innerHTML;
    if(print == 1){
        document.getElementById('one').innerHTML= "one";
        document.getElementById('two').innerHTML= "two";
        document.getElementById('three').innerHTML= "three";
        document.getElementById('four').innerHTML= "four";
        document.getElementById('five').innerHTML= "five";
        document.getElementById('six').innerHTML= "six";
        document.getElementById('seven').innerHTML= "seven";
        document.getElementById('eight').innerHTML= "eight";
        document.getElementById('nine').innerHTML= "nine";
    }else{
        document.getElementById('one').innerHTML= "1";
        document.getElementById('two').innerHTML= "2";
        document.getElementById('three').innerHTML= "3";
        document.getElementById('four').innerHTML= "4";
        document.getElementById('five').innerHTML= "5";
        document.getElementById('six').innerHTML= "6";
        document.getElementById('seven').innerHTML= "7";
        document.getElementById('eight').innerHTML= "8";
        document.getElementById('nine').innerHTML= "9";
    }
},5000);

//timout
setTimeout(()=>{
    document.getElementById('splash').innerHTML = '';
},4000);
//clear screen
let number='';
function clearScreen(){
        let screen = document.getElementById('dispalyScreen');
        screen.innerHTML = '0';
        number ='';
}

function turnon(){
    let list = document.querySelectorAll(".button");
    for (var i = 0; i < list.length; ++i) {
    list[i].classList.remove('disable');
    }
    let screen = document.getElementById('dispalyScreen');
    screen.innerHTML = '0';
}
function turnoff(){
    let list = document.querySelectorAll(".button");
    for (var i = 0; i < list.length; ++i) {
    list[i].classList.add('disable');
    }
    let screen = document.getElementById('dispalyScreen');
    screen.innerHTML = '';
     
}






function num(a){
    let screen = document.getElementById('dispalyScreen'); 
    number = number + a;
    screen.innerHTML = number;
}

function operation(){
    let value = eval(number);
    let screen = document.getElementById('dispalyScreen');
    screen.innerHTML = value;
    number= value;
}




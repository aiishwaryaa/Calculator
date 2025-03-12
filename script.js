// document.addEventListener("onclick",function(event){
//     if  (event.key) { 
//         var audio = document.getElementById('music');
//         audio.play();
//     }
// });




function solve(val){
    var v = document.getElementById("display");
    v.value += val;//append values and  display in line
}
function result(){
    var num1 = document.getElementById('display').value;
    var num2 = eval(num1);//convert strings to number
    document.getElementById('display').value=num2;
    }


function  backspace(){
     var x = document.getElementById('display');
    x.value = x.value.slice(0,-1);// removes the last  character input
}


const clearHandle=()=>{
    console.log("Hoooooo");
    document.getElementById('display').value="";
}
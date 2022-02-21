

let num = 0;

updateUi()

function increment(){
    num++;
    updateUi()

}
 function decrement(){
    num--;
    updateUi()
}
function reset(){
    num = 0;
    updateUi()
}
function updateUi(){
    const numberElement = document.getElementById("number")
    numberElement.innerHTML = `<h1>${num}</h1>`
    
    if(num < 0){
        numberElement.style.color = "red";    
    }
    else if(num > 0){
        numberElement.style.color = "green";
    }
    else{
        numberElement.style.color = "blue"
    }


    
}
document.getElementById("increment").addEventListener('click',increment)
document.getElementById("decrement").addEventListener('click',decrement)
document.getElementById("reset").addEventListener('click',reset)



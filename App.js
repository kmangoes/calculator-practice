const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate() {
    try{
    display.value = eval(display.value); 
    }
    catch (error) {
        display.value = "Error"; 
    }
}
function backspace(){
    display.value = display.value.slice(0,-1); 
}
document.addEventListener('keydown', function(event){
    const key = event.key;
    if(!isNaN(key)){
        appendToDisplay(key); 
    } else if(['+','-','*','/','.'].includes(key)){
        appendToDisplay(key); 
    } else if (key === 'Enter') {
        calculate(); 
    } else if (key === 'C' || key === 'Escape') {
        clearDisplay(); 
    } 
}); 
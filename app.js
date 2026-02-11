let inputBox = document.getElementById("inputBox");
let btns =document.querySelectorAll(".btn");
let equal = document.getElementById("equal")
let clear =document.getElementById("clear");
let del =document.getElementById("delete");
let isResult =false;
btns.forEach((btn)=>{
btn.addEventListener("click",()=>{
            if(isResult){
            inputBox.value = "";
            isResult = false;
        }
        inputBox.value += btn.textContent;

})
})

clear.addEventListener("click",()=>{
    inputBox.value="";
});

del.addEventListener("click", ()=>{
    inputBox.value = inputBox.value.slice(0,-1);
})



equal.addEventListener("click", ()=>{
    const firstChar = inputBox.value.charAt(0);
    const lastChar = inputBox.value.slice(-1);
    const operators = ["+", "-", "*", "/", "%"];
    
    // منع الحساب لو أول أو آخر حرف operator
    if(operators.includes(firstChar) || operators.includes(lastChar)) {
        inputBox.value = "Error!";
    setTimeout(() => inputBox.value = "", 1500);
 return;

    }
   
    inputBox.value = eval(inputBox.value);
    isResult = true;
})

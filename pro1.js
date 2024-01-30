// get elemants imto variblble


var inputEle =document.getElementById("input");

var buttonEle =document.getElementById("btn");

var msgEl =document.getElementById("msg");
buttonEle.onclick = function() {
    // get value from input
    var inputValue = inputEle.value;
     //console.log(inputValue);


    // put  input value into p
    msgEl.innerHTML = inputValue;
    inputEle.value = "";
    
    
    
    
    if(inputValue !="")
    {
        msgEl.innerHTML = inputValue;
        inputEle.value = "";
    }



}

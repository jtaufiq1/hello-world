//var myString = prompt("Enter String");
var inputField = document.getElementById('#inputField');

function sPrint(str) {
    for(let i in arguments) {
        str = ' ' + arguments[i];
    }
    console.log(str);
}

function sTest(str_) {

    if(!myString) {
    sPrint("Input non-empty String");
    } else {
    sPrint("Thanks for entering '" + str_ + "!' "); 
    }
}
inputField.value = "this";
// sTest(myString);
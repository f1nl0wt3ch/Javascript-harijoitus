/**
 * Created by dinhthinh on 02/11/16.
 */

function multiply(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = number1*number2;
}

function divide() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = number1/number2;
}

function getURL() {
    alert(document.URL);
}
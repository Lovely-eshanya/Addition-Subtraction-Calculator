function difference() {
    num1=Number(document.getElementById("first").value)
    num2=Number(document.getElementById("second").value)
    result=num1-num2
    document.getElementById("answer").innerHTML="The answer is "+result
}
function sum() {
    num1=Number(document.getElementById("first").value)
    num2=Number(document.getElementById("second").value)
    result=num1+num2
    document.getElementById("answer").innerHTML="The answer is "+result
}

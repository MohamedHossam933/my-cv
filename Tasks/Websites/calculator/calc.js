// get number into screen
function getNumber (num)
{
    var input = document.getElementById("screen");

    switch (num)
    {
        case 1:
            input.value += '1';
            break;
        case 2:
            input.value += '2';
            break;
        case 3:
            input.value += '3';
            break;
        case 4:
            input.value += '4';
            break;
        case 5:
            input.value += '5';
            break;
        case 6:
            input.value += '6';
            break;
        case 7:
            input.value += '7';
            break;
         case 8:
            input.value += '8';
            break;
        case 9:
            input.value += '9';
            break;
        case 0:
            input.value += '0';
            break;
    }
}

//get operator into screen
function getOperand (operand)
{
    var operator = document.getElementById("screen");

    switch (operand)
    {
        case '+' :
            operator.value += '+';
            break;
        case '-' :
            operator.value += '-';
            break;
        case '*' :
            operator.value += '×';
            break;
        case '/' :
            operator.value += '÷';
            break;
        case '+/-' :
            operator.value += '-' + operator.value;
    }
}

// clear screen
function clean ()
{
    document.getElementById("screen").value = "";
    document.getElementById("answer").value = "";
    // console.log("clear");
}

//backspace
function backspace()
{
    var input = document.getElementById("screen");
    var num = input.value;
    if (num.length > 0) 
    {
        num = num.substring (0 , num.length-1); //remove last number
        input.value = num;    
    }
}

//calculate the sum
function calculate()
{
    var sum = document.getElementById("screen");
    ans = Math.floor(+ eval(sum.value) );
    document.getElementById("answer").value = '=' + ans;
}

//periority
var s = 0;
function brackets()
{
    var per = document.getElementById ("screen");
    if (s == 0) {
        per.value += '(';
        s = 1;
    }
    else if (s==1) {
        per.value += ')';
        s = 1;
    }
}
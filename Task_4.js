// takes an digit
function getNumber(num) {
    var input = document.getElementById('input');
    switch(num) {
        case 0:
        input.value += '0';
        break;
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
    }
}
// clears the input field
function clearField() {
    document.getElementById("input").value = '';
}
// takes an operator
function getOperator(oper) {
    var input = document.getElementById("input");
    switch(oper) {
        case '+':
        input.value += '+';
        break;
        case '-':
        input.value += '-';
        break;
        case '*':
        input.value += '*';
        break;
        case '/':
        input.value += '/';
        break;
    }
}
// calculate expression
function calculate () {
    var input = document.getElementById('input');
    ans = Math.round(eval(input.value));
    document.getElementById('input').value = '= ' + ans;
}
// deletes the last entered character
function backSpace() {
    var input = document.getElementById('input');
    var x = input.value;
    if(x.length > 0) {
        x = x.substring(0, x.length-1);
        input.value = x;
    }
}
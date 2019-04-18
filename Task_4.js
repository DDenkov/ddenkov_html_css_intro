// takes an digit
function appendValue(num, value) {

    var input = document.getElementById('input');
  
    input.value += value.toString()
  
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
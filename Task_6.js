// takes an digit
const getNumber = (num) => {
    let input = document.getElementById('input');
    let result = input.value;

    if(result.charAt(0) === '=') 
        document.getElementById("input").value = '' + num;
    else{
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
}
// clears the input field
const clearField = () => {
    document.getElementById("input").value = '';
}
// takes an operator
const getOperator = (oper) => {
    var input = document.getElementById("input");
    var res = input.value;
    var n = res.length;
    var result = res.charAt(n-1);
    
        switch(oper) {
            case '+':
            if(result === '+') 
            document.getElementById('input').innerHTML = input;
            else
            input.value += '+';
            break;
            case '-':
            if(result === '-') 
            document.getElementById('input').innerHTML = input;
            else
            input.value += '-';
            break;
            case '*':
            if(result === '*') 
            document.getElementById('input').innerHTML = input;
            else
            input.value += '*';
            break;
            case '/':
            if(result === '/') 
            document.getElementById('input').innerHTML = input;
            else
            input.value += '/';
            break;
    }
}
// calculate expression
const calculate =() => {
    let input = document.getElementById('input');
    let ans = Math.round(eval(input.value));
    document.getElementById('input').value = '= ' + ans;
}
// deletes the last entered character
const backSpace = () => {
    let input = document.getElementById('input');
    let x = input.value;
    if(x.length > 0) {
        x = x.substring(0, x.length-1);
        input.value = x;
    }
}

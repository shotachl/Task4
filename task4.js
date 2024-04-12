function calculation(operator) {
    var firstNumber = parseFloat(document.getElementById('firstInput').value);
    var secondNumber = parseFloat(document.getElementById('secondInput').value);
    
    var result;
    
    switch(operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
    }
    
    document.getElementById('display').value = result;
}
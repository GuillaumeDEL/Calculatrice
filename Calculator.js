var table = document.createElement('table');

var Calculator = {
currentSign: false,
number1: false,
number2: false,
init : function(selector){

var row1 = document.createElement('tr');
row1.appendChild(Calculator.generateCell('', 3));
row1.appendChild(Calculator.generateCell('+'));
table.appendChild(row1);

    var row2 = document.createElement('tr');
    row2.appendChild(Calculator.generateCell('7'));
    row2.appendChild(Calculator.generateCell('8'));
    row2.appendChild(Calculator.generateCell('9'));
    row2.appendChild(Calculator.generateCell('-'));
    table.appendChild(row2);

    var row3 = document.createElement('tr');
    row3.appendChild(Calculator.generateCell('4'));
    row3.appendChild(Calculator.generateCell('5'));
    row3.appendChild(Calculator.generateCell('6'));
    row3.appendChild(Calculator.generateCell('*'));
    table.appendChild(row3);

    var row4 = document.createElement('tr');
    row4.appendChild(Calculator.generateCell('1'));
    row4.appendChild(Calculator.generateCell('2'));
    row4.appendChild(Calculator.generateCell('3'));
    row4.appendChild(Calculator.generateCell('/'));
    table.appendChild(row4);

    var row5 = document.createElement('tr');
    row5.appendChild(Calculator.generateCell('0', 3));
    row5.appendChild(Calculator.generateCell('='));
    table.appendChild(row5);

    var row6 = document.createElement('tr');
    row6.appendChild(Calculator.generateCell('Reset', 4));
    table.appendChild(row6);

    var element = document.querySelector(selector);

    element.appendChild(table);
},
generateCell : function(text, colspan){
    var td = document.createElement('td');
    td.setAttribute('colspan', colspan);
    td.textContent = text;


    switch(text){
        case '+':
        case '-':
        case '*':
        case '/':
            td.addEventListener('click', function(){                    
                if(Calculator.number2){
                    Calculator.compute();
                }
                Calculator.currentSign = text;
            });
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            td.addEventListener('click', function(){
                if(Calculator.currentSign === false){
                    Calculator.number1 = Calculator.number1 * 10 + parseInt(text);
                    Calculator.updateResult(Calculator.number1);
                } 
                else{
                    Calculator.number2 = Calculator.number2 * 10 + parseInt(text);
                    Calculator.updateResult(Calculator.number2);
                }
            });
            break;
        case '=':
            td.addEventListener('click', function(){
                Calculator.compute();
        });
            break;
        case 'Reset':
            td.addEventListener('click', function(){
                Calculator.number1 = false;
                Calculator.number2 = false;
                Calculator.currentSign = false;
                Calculator.updateResult('');

            })
    }
    return td;
},
compute : function(){
    var result;
    switch(Calculator.currentSign){
        case '+':
            result = Calculator.number1 + Calculator.number2;
            break;
        case '-':
            result = Calculator.number1 - Calculator.number2;
            break;
        case '*':
            result = Calculator.number1 * Calculator.number2;
            break;
        case '/':
            if(Calculator.number2 !== 0){
                result = Calculator.number1 / Calculator.number2;
            }
            else{                    
                alert('Fou pas la merde sur ma calculette');
            }

            break;
    }
    Calculator.updateResult(result);
    Calculator.number2 = false;
    Calculator.currentSign = false;
    Calculator.number1 = result;
},

updateResult : function(result){
    var display = document.querySelector('td');
    display.textContent = result;
},    
};

Calculator.init('.calculator')

var calc = document.querySelector('.calculator');
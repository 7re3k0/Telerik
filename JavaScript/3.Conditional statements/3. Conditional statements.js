// Problem 1. Exchange if greater

function exchange(a, b){
    if (a > b) {
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
        console.log(a +  ' ' + b);
    } else{
        console.log(a + ' ' + b);
    };
}

exchange(5,4);
exchange(10,11);
exchange(5123123,432445);

// Problem 2. Multiplication Sign

function multiplySign(a, b, c){
    if (a > 0 && b > 0 && c > 0) {
        console.log('+');
    } else if(a < 0 && b < 0 && c < 0) {
        console.log('-');
    } else if(a < 0 && b < 0 && c > 0) {
        console.log('+');
    } else if(a < 0 && b > 0 && c < 0) {
        console.log('+');
    } else if(a > 0 && b < 0 && c < 0) {
        console.log('+');
    } else if(a > 0 && b > 0 && c < 0) {
        console.log('-');
    } else if(a > 0 && b < 0 && c > 0) {
        console.log('-');
    } else if(a < 0 && b > 0 && c > 0) {
        console.log('-');
    } else {
        console.log(0);
    };
}


multiplySign(12, -23, -212);
multiplySign(-12, -23, -212);
multiplySign(12, 23, -212);
multiplySign(12, -23, 0);

// Problem 3. The biggest of Three

function biggestOne(a, b, c){
    if (a > b) {
        if (a > c){
            console.log(a + ' is the biggest');
        } else {
            console.log(c + ' is the biggest');
        };
    } else {
        if(b > c){
            console.log(b + ' is the biggest');
        } else {
            console.log(c + ' is the biggest');
        };
    };
}

biggestOne(12, 13, 15);
biggestOne(17, 13, 15);
biggestOne(-12, -18, -15);
biggestOne(-12, 0, -15);

// Problem 4. Sort 3 numbers

function sortThem(a, b, c){
    if (a > b) {
        if (a > c){
            if (b > c) {
                console.log(a + ' ' + b + ' ' + c);
            } else {
                console.log(a + ' ' + c + ' ' + b);
            };
        } else {
            console.log(c + ' ' + a + ' ' + b);
        };
    } else {
        if(b > c) {
            if (a > c){
                console.log(b + ' ' + a + ' ' + c);
            } else {
                console.log(b + ' ' + c + ' ' + a);
            }
        } else {
            console.log(c + ' ' + b + ' ' + a);
        };
    };
}

sortThem(12, 15, 17);
sortThem(19, 15, 17);
sortThem(12, 20, 17);
sortThem(-12, -15, 0);

// Problem 5. Digit as word

function digitise(number){
    switch (number) {
        case 0:
            console.log('zero')
        case 1:
            console.log('one');
            break;
        case 2:
            console.log('two');
            break;
        case 3:
            console.log('three');
            break;
        case 4:
            console.log('four');
            break;
        case 5:
            console.log('five');
            break;
        case 6:
            console.log('six');
            break;
        case 7:
            console.log('seven');
            break;
        case 8:
            console.log('eight');
            break;
        case 9:
            console.log('nine');
            break;
        default:
            console.log('not a digit');
            break;
    }
}

digitise(8);
digitise(20);
digitise('hi');
digitise(9);
digitise(0);

// Problem 6. Quadratic equation

function quadEQ(a, b, c) {
    var d = b * b - 4 * a * c;

    if (a === 0) {
        console.log('x = ' + (-c / b));
    }
    else {
        if (d < 0) {
            console.log('no real roots');
        }
        else if (d === 0) {
            console.log('x1 = x2 = ' + ((-b) / (2 * a)));
        }
        else {
            console.log('x1 = ' + ((-b - Math.sqrt(d))) / (2 * a));
            console.log('x2 = ' + ((-b + Math.sqrt(d))) / (2 * a));
        }
    }
}

quadEQ(2, 5, -3);
quadEQ(-1, 3, 0);
quadEQ(-0.5, 4, -8);
quadEQ(5, 2, 8);

// Problem 7. The biggest of five numbers
// Ok ... too much writing and will be lost in all the 'if's and it's basically the same as the sort of 3 numbers
// So here is a simplified version:

function big5(a, b, c, d, e){
    var max = Math.max();
    
    if(a > max){
        max = a;
    }
    if(b > max){
        max = b;
    }
    if(c > max){
        max = c;
    }
    if(d > max){
        max = d;
    }
    if(e > max){
        max = e;
    }
    return(max);
}

console.log(big5(5, 2, 2, 4, 1));
console.log(big5(-2, -22, 1, 0, 0));
console.log(big5(-2, 4, 3, 2, 0));
console.log(big5(0, -2.5, 0, 5, 5));
console.log(big5(-3, -0.5, -1.1, -2, -0.1));

// Problem 8. Number as words

var numbers = [0, 9, 10, 12, 19, 25, 98, 98, 273, 400, 501, 617, 711, 999];

for(var ind = 0; ind < numbers.length; ind++){
    console.log(numbers[ind] + '\t' + getString(numbers[ind]));
}

function getString(number){
    var text = '', 
        hundreds = Math.floor(number / 100) % 10,
        tens = Math.floor(number / 10) % 10,
        ones = number % 10;

    if(!hundreds && !tens && !ones){
        text = 'zero';
    }

    if (hundreds) {
        text += getDigit(hundreds) + ' hundred';
    }

    if (tens || ones) {
        if (text.length) {
            text += ' and ';
        }

        if (tens) {
            if (tens === 1) {
                return (text + getTeens(tens * 10 + ones)).capitalize();
            }
            text += getTens(tens);
        }

        if (ones) {
            if(tens){
                text += ' ';
            }
            
            text += getDigit(ones);
        }
    }

    return text.capitalize();
}

function getDigit (digit) {
    switch(digit){
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return '';
    }
};

function getTens (digit) {
    switch(digit){
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
        default: return '';
    }
};

function getTeens (digit) {
    switch(digit){
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
        default: return '';
    }
};
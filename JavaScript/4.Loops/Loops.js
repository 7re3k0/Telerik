// Problem 1. Numbers

function Numbs(number) {
    for (var i = 1; i <= number; i++) {
        console.log(i);
    }

    console.log(new Array(11).join('-'));
}

Numbs(5);
Numbs(999);
Numbs(28713);

// Problem 2. Numbers not divisible

function divNums(number) {
    for (var i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 7 === 0) {
            console.log(i);
        }
    }

    console.log(new Array(11).join('-'));
}

divNums(5);
divNums(999);
divNums(28713);

// Problem 3. Min/Max of sequence

function minMax(numSet) {
    numSet.sort();
    console.log('min = ' + numSet[0]);
    console.log('max = ' + numSet[numSet.length - 1]);
    console.log(new Array(11).join('-'));
}

minMax([1, 2, 3, 4, 5]);
minMax([99, 25, 38, 29, 16, 18]);
minMax([3636, 7823, 2290, 2829]);

// Problem 4. Lexicographically smallest

function lexGraph(objects) {
    for (var object in objects) {
        var properties = [];
        
        for (var property in objects[object]) {
            properties.push(property);
        }

        properties.sort();
        
        console.log('Smallest property: ' + properties.shift());
        console.log('Largest property: ' + properties.pop());
        console.log(new Array(11).join('-'));
    }
}

lexGraph([document, window, navigator]);

function methodName(arguments) {
    
}
console.log(obj);
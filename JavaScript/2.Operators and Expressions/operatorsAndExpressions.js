//1. Write an expression that checks if given integer is odd or even.

function evenOdd(number) {
    if (number % 2 == 0) {
        return 'Number is even.';
    } else {
        return 'Number is odd.'
    }
};

console.log(evenOdd(7));
console.log(evenOdd(10));
console.log(evenOdd(2423424));
console.log(evenOdd(123123129));

// 2.  Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.

function divBy(number) {
    if (number % 7 == 0 && number % 5 == 0) {
        return 'This number can be divided by 7 AND 5.';
    } else {
        return 'This number can not be divided by 7 AND 5.'
    }
};

console.log(divBy(5));
console.log(divBy(7));
console.log(divBy(35));
console.log(divBy(70));

// 3. Write an expression that calculates rectangle's area by given 'width' and 'height'.

function rect(width, height) {
    var Area = width * height;
    return 'The area of this rectangle is: ' + Area;
};

console.log(rect(7, 9));
console.log(rect(21, 12));
console.log(rect(7.9, 9.7));

// 4. Write an expression that checks for given integer if its third digit (right-to-left) is 7.

function third7(number) {
    return Math.floor(number / 100) % 10 == 7;
};

console.log(third7(34564564789));
console.log(third7(1231237456));
console.log(third7(1231234335456789));
console.log(third7(1345456567786735));

// 5. Write a boolean expression for finding if the bit 3 (counting from 0) of a given integer is 1 or 0.

function thirdBit(number) {
    var message = 'The third bit of the given number is: ';
    if (number & (1 << 3) != 0) {
        console.log(message + 1);
    } else {
        console.log(message + 0);
    }
};

thirdBit(200);
thirdBit(999);
thirdBit(111);
thirdBit(128);

// 6. Write an expression that checks if given point (x, y) is within a circle K((0, 0), 5).

function insideCircle(x, y) {
    return (x * x + y * y) < 5 * 5;
};

console.log(insideCircle(3, 3));
console.log(insideCircle(4, 3));
console.log(insideCircle(4, 2));

// 7. Write an expression that checks if given positive integer n (n ? 100) is prime.

function prime(number) {
    if (number <= 3) {
        return number > 1;
    }
    if (number % 2 == 0 || number % 3 == 0) {
        return false;
    }
    for (var i = 5; i * i <= number; i += 6) {
        if (number % i == 0 || number % (i + 2) == 0) {
            return false;
        }
    }
    return true;
};

console.log(prime(7));
console.log(prime(121));
console.log(prime(19));
console.log(prime(99));

// 8. Write an expression that calculates trapezoid's area by given sides a and b and height h.

function trapezoid(a, b, h) {
    return ((a + b) * h) / 2;
};

console.log(trapezoid(7, 8, 9));
console.log(trapezoid(78.9, 89.7, 97.8));
console.log(trapezoid(9234.5673, 34534.1578, 1863.5677));

// 9. Write an expression that checks for given point (x, y) if it is within the circle K((1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).

function coordinator(x, y) {
    var inCircle = (x - 1) * (x - 1) + (y - 1) * (y - 1) <= 3 * 3;
    var outRectangle = !((x >= -1 && x <= -1 + 6) && (y <= 1 && y >= 1 - 2));
    return inCircle && outRectangle;
};

console.log(coordinator(1, 4));
console.log(coordinator(0, 1));
console.log(coordinator(3.5, 1.5));
console.log(coordinator(-20, -20));
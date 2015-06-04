// Problem 1. Increase array members

var i, incArr,
    myArray = new Array(20);

function incArr() {
    for (i = 0; i < myArray.length; i += 1) {
        myArray[i] = i * 5;
    }
    console.log(myArray);
}

incArr();

// Problem 2: Write a script that compares two char arrays lexicographically (letter by letter).

var lexCheck, i, X, arrOne = ['a', 'b', 'c', 'D', 'E', 'f'],
    arrTwo = ['D', 'c', 'C', 'A'];

function lexCheck(arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        for (X = 0; X < arr2.length; X++) {
            if (arr1[i] === arr2[X]) {
                console.log(arr1[i] + " is the same as " + arr2[X]);
            } else {
                console.log(arr1[i] + " differs from " + arr2[X]);
            }
        }
    }
}

console.log(lexCheck(arrOne, arrTwo));

// Problem 3. Maximal sequence

var maxSecNums = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];

var maxEqSec = function(sequence) {
    var tempCount = 1,
        bestCount = 1,
        subPosition = 1;

    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i - 1] == sequence[i]) {
            tempCount += 1;
        } else {
            tempCount = 1;
        }
        if (bestCount < tempCount) {
            bestCount = tempCount;
            subPosition = i - 1;
        }
    }
    for (i = subPosition; i < subPosition + bestCount; i++) {
        console.log(sequence[subPosition]);
    }
};

console.log(maxEqSec(maxSecNums));

// Problem 4. Maximal increasing sequence

var maxEqIncSeqNums = [3, 2, 3, 4, 2, 2, 4];

var maxEqIncSeq = function(sequence) {
    var tempCount = 1,
        bestCount = 1,
        subPosition = 1;
    for (var i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] === sequence[i + 1] - 1) {
            tempCount += 1;
        } else {
            tempCount = 1;
        }
        if (bestCount < tempCount) {
            bestCount = tempCount;
            subPosition = i - 1;
        }
    }
    for (var X = subPosition; X < subPosition + bestCount; X += 1) {
        console.log(sequence[X]);
    }
};

maxEqIncSeq(maxEqIncSeqNums);

// Problem 5. Selection sort

function sortArr(nums) {
    for (var i = 0; i < nums.length; i++) {
        var currMin = i;
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[currMin] > nums[j]) {
                currMin = j;
            }
        }
        var temp = nums[i];
        nums[i] = nums[currMin];
        nums[currMin] = temp;
    }

    console.log(nums.join(', '));
}

sortArr([2, 4, 6, 12, 23425, -13, -13424, 1, -1, 0]);

// Problem 6. Most frequent number

var freqNums = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];

function freq(nums) {
    var maxL = 0;
    var element = nums[0];
    for (var i = 0; i < nums.length; i++) {
        var currL = 0;
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                currL++;
            }
        }

        if (currL > maxL) {
            maxL = currL;
            element = nums[i];
        }
    }

    console.log('Most frequent number: ' + element);
}

freq(freqNums);

// Problem 7. Binary search

function binSearch(nums, element) {
    var min = 0,
        max = nums.length - 1,
        answer = -1;
    while (min <= max) {
        var mid = min + (max - min) / 2;
        mid = Math.floor(mid);
        if (nums[mid] > element) {
            max = mid - 1;
        } else if (nums[mid] < element) {
            min = mid + 1;
        } else {
            answer = mid;
            break;
        }
    }

    console.log('Index of element ' + element + ' is ' + answer);
}

binSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
binSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9);
binSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
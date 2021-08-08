// problem no 1 feet to inch

function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
console.log(feetToInch(1));

// problem no 2 centimeter to meter

function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
}
console.log(centimeterToMeter(1));

// problem no 2 book pages

function paperRequirements(book1, book2, book3) {
    const firstBookPage = 100;
    const firstBook = firstBookPage * book1;

    const secondBookPage = 200;
    const secondBook = secondBookPage * book2;

    const thirdBookPage = 300;
    const thirdBook = thirdBookPage * book3;

    const totalPage = firstBook + secondBook + thirdBook;
    return totalPage;

}

const totalBook = paperRequirements(1, 1, 1);
console.log(totalBook);

//  problem no 3 best friend

function bestFriend(array) {
    let bigName = array[0];
    for (let i = 0; i < array.length; i++) {
        const name = array[i];
        if (bigName.length < name.length) {
            bigName = name;
        }
    }
    return bigName;
}
const myArray = bestFriend(['masum', 'shorif', 'dip', 'shuvo', 'prince', 'rimon', 'goribmanus']);
console.log(myArray);
console.log(typeof (myArray))

// problem 5 return positive 



function arrayNo(arr) {
    let positive = [];
    for (let i = 0; i < arr.length; i++) {
        let no = arr[i];
        if (no < 0) {
            break;
        }
        else {
            positive.push(no);
        }

    }
    return positive;

}
console.log(arrayNo([12, 33, 122, 2, 4, 45, 5, -12, 12, -34, 43, 34]))


function evenNo(arr1) {
    let even = [];
    for (let i = 0; i < arr1.length; i++) {
        const elements = arr1[i];
        if (elements % 2 == 0) {
            even.push(elements);
        }
    }
    return even;
}
console.log(evenNo([12, 33, 122, 2, 4, 45, 5, 12, 43, 34]))
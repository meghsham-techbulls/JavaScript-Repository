let num = 1234;

let reverseNumber = 0;

while (num > 0) {
    let digit = num % 10;
    reverseNumber = (reverseNumber*10)+digit;
    num = Math.floor(num / 10);
}

console.log(reverseNumber);
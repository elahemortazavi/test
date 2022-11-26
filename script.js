function isEven(number) {
    return number % 2 === 0;

}
console.log(isEven(56));

function moreThanSixGoals(num1, num2) {
    return num1 + num2 > 6;
}
console.log(moreThanSixGoals(2, 5));
console.log(moreThanSixGoals(2, 5));


function myMood(now) {
   if (now === 'happy') {
    return "great job";
   } else if (now === "sad"){
    return "every cloud has a silver lining";
   } else if (typeof now === "number") {
    return "beep beep beep";
    } else {
    return "im sorry";
    }
}


console.log(myMood("sad"));
console.log(myMood(7));



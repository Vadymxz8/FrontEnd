"use strict";
let wins = 0;

while (!confirm("Are you ready?")) {
    alert("Come back when you're ready.");
}


while ( wins < 3 ) {
    const target = Math.floor(Math.random() * 10);
    let correct = false;
    while (!correct) {
        let input = prompt("Guess a number between 1 and 10");
        let number = parseInt(input);

        if (target === number) {
            wins++;
            alert("You win this round!")
correct = true;
        } else if (number<target){
            alert("Try a bigger number");
        }else if (number>target){
            alert("Try a smaller number");
        }else{
            alert("That's not a valid number. Try again.");
        }
    }
    alert(`You won ${wins} times.`);
}
alert("Congratulations! You won 3 time and finished the game.");
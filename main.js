// Create an APP that generate random message after user input

// Messages

let Message = ["Monday is cool: ", "Tuesday not so: ", "Wednesday goes to Thursday Yo: ", "Friday is dope ^__^ : ", "Saturday to Sunday Smoke: "];
let Message1 = ["we get to eat ", "we get to party ", "sadly, we at work ", "we dance to the moonlight ", "Ohhhh we rest baby "];
let Message2 = ["and thats on Crazy Frog!", "and that's on Bardock!", "and that's on Big Heffner!", "and that's on Louis Litt!", "and that's on Santa Claus!"];

// Random function
function randomMessage (input) {
    let random = Math.floor(Math.random()*input.length);
    return input[random];

}

// Concat messages
for (let i=0; i <= 2; i++) {
    //let final = [].toString;
    let final = [];
    let index = Math.floor(Math.random()*i);
    switch (index) {
        case 0:
            final.push(randomMessage(Message));
            final.push(randomMessage(Message1));
            final.push(randomMessage(Message2));
        break;
        case 1:
            final.push(randomMessage(Message));
            final.push(randomMessage(Message1));
            final.push(randomMessage(Message2));
        break;
        case 2:
            final.push(randomMessage(Message));
            final.push(randomMessage(Message1));
            final.push(randomMessage(Message2));
        break;
        default:
            console.log('Error, no valid input');
    } 
    console.log(final.join(""));
}


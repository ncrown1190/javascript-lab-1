const firstName = "nazima";
const age = 38;
const birthDay = "November 3";
let pineApplePizza = true;
let lifeEvents = [
  "I was born in Hyderabd, India",
  "I went to OU College",
  "I got 100% in Math",
  "i am a graduate of an IIT Kanpur",
];

if ((pineApplePizza = true)) {
  console.log(
    `My name is ${firstName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthDay}.`
  );
} else {
  console.log(
    `My name is ${firstName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthDay}.`
  );
}
for (let item of lifeEvents) {
  console.log(item);
}
let counter = 0;

while (true) {
  let randomNumber = console.log(Math.floor(Math.random() * 10) + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(`5 === 5`);
    break;
  }
}

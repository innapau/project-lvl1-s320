import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// Ask for user name.
const getUserName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};

// Main game cycle.
const questionCount = 3;
const gameStart = (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = getUserName();
  for (let i = 0; i < questionCount; i += 1) {
    const game = gameData();
    const question = car(game);
    const correctAnswer = cdr(game);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`\n${userAnswer} is a wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}.`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${userName}!\n`);
};
export default gameStart;

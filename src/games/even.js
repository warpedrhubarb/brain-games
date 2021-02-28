import readlineSync from 'readline-sync';
import printName from '../cli.js';
import { getRandomInt, isEven } from '../utils.js';

const startBrainEven = () => {
  const name = printName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 1; round <= 3; round += 1) {
    const genRoundData = () => {
      const question = getRandomInt(1, 100);
      const correctAnswer = (isEven(question)) ? 'yes' : 'no';
      return [question, correctAnswer];
    };

    const [question, correctAnswer] = genRoundData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startBrainEven;

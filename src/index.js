import readlineSync from 'readline-sync';

const printName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const startEngine = (condition, genRoundData) => {
  const name = printName();
  console.log(condition);
  for (let round = 1; round <= 3; round += 1) {
    const [question, correctAnswer] = genRoundData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export { printName, startEngine };

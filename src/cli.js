import readlineSync from 'readline-sync';

const printName = () => {
    const name = readlineSync.question('May I have your name? ');
    return `Hello, ${name}!`;
};

export { printName };

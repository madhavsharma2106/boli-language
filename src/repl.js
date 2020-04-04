const { prompt } = require('inquirer');
const chalk = require('chalk');

const { parseAndEvaluate } = require('./parse-and-evaluate');

const askQuestions = () => {
  const questions = [
    { name: 'COMMAND', type: 'input', message: chalk.blue('Boli >') },
  ];

  return prompt(questions);
};

const repl = async () => {
  try {
    const answers = await askQuestions();
    const { COMMAND } = answers;

    if (COMMAND.trim()) {
      console.log(chalk.yellow(parseAndEvaluate(COMMAND)));
    }
  } catch (error) {
    console.error(error);
  }

  repl();
};

if (require.main === module) {
  console.log(
    chalk.red(
      `${chalk.bgYellow('Boli')} Programming bhasha mein aapka swagat hai.`,
    ),
  );
  repl();
}

module.exports = repl;

// Import agents.json
import agents from './agents.json' assert { type: 'json' };
// Import inquirer to allow user input in the console
import inquirer from 'inquirer';

// Function to return a random voice line from the agent you chose
const getRandomVoiceline = (choice) => {
  // Filter the agents.json file to find the agent you chose
  const chosenAgent = agents.filter((agent) => agent.name === choice)[0];
  // If the agent you chose is not in the agents.json file, return an error message
  if (chosenAgent.length === 0) {
    console.log('Invalid choice!');
  }
  // Return a random voice line from the agent you chose
  return chosenAgent.voiceLines[
    Math.floor(Math.random() * chosenAgent.voiceLines.length)
  ];
};

// UI Boilerplate
console.log('\n\n\nWelcome to Valorant Mixed Messages!\n');
console.log('Please Choose an Agent from the following:');
console.log('\n1. Raze\n2. Reyna\n3. Sage\n4. Iso\n5. Sova\n');

// Function to convert strings to title case
const convertToTitleCase = (str) => {
  if (!str) {
    return '';
  }

  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase().concat(word.substr(1));
    })
    .join(' ');
};

// Ask the user which agent they would like to choose
inquirer
  .prompt([
    {
      type: 'input',
      name: 'agent',
      message: 'Which Agent would you like to choose?',
    },
  ])
  .then((answer) => {
    // Convert the user's input to title case
    const voiceLine = getRandomVoiceline(answer.agent.toLowerCase());
    // Display the chosen agent and their voice line
    console.log(`\n${convertToTitleCase(answer.agent)}: "${voiceLine}"`);
  });

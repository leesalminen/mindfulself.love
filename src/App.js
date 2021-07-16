import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import { useEffect, useState } from 'react';

const options = [
  `How do you want to feel at the end of today?`,
  `What are 3 things you're grateful for today?`,
  `What's one thing you'd like to do well today?`,
  `What's an important goal that you're working toward?`,
  `What working well in your life right now?`,
  `What are you looking forward to today?`,
  `What's something interesting you learned recently?`,
  `Where do you want to be a year from now?`,
  `What inspires you?`,
  `What's one area of your life you'd like to improve?`,
  `What can you do to set yourself up for success today?`,
  `What compliment can you give yourself right now?`,
  `What do you want to remember about this time in your life?`,
  `What most helps you feel relaxed?`,
  `What reminder do you want to give yourself today?`,
  `What have you learned about yourself in the last year?`,
  `What was the the highlight of your day yesterday?`,
  `What do you want to focus on today?`,
  `What are you most proud of?`,
  `What is your favorite memory of this year so far?`,
  `What aspects of your life bring you the most happiness right now?`,
  `What's something you'd like to get better at?`,
  `How would your life today amaze your childhood self?`,
  `What small step can you take to work toward reaching a goal today?`,
  `What are five things you appreciate about yourself?`,
  `What are you scared of right now?`,
  `What’s not working in your life right now?`,
  `Write someone a letter with whom you have an unresolved issue.`,
  `What would your ideal day look like?`,
  `When you were younger, what did you want to be when you grew up and why?`,
  `What’s something you wish others knew about you?`,
  `Who is someone you admire? What qualities do you love about them?`,
  `When you picture yourself 10 years from now, what do you want to have achieved and experienced?`,
  `What was the most peaceful moment during the day?`,
  `Describe something you learned today that you didn’t know before.`,
  `Would you change any of the decisions you made today?`,
  `Who do you wish you had talked to today? How do they improve your life?`,
  `Describe the moments of frustration you felt today. How would your day have changed if those moments were different?`,
  `Reflect on how your body feels. Where are you storing your stress? What put it there?`,
  `If you could relive any day of your life and change nothing, what day would you choose?`,
  `How would you like your life to be different in a year? How would you like it to be the same?`,
  `What was something you desperately wanted as a child? What do you desperately want now?`,
  `Rewrite a conversation you’ve had in the way you wish it had gone.`,
  `What was your best age so far?`,
  `Do you have a memory that should be happy, but instead makes you sad? What about the other way around?`,
  `When is a time in your life that you felt successful?`
];

const getRandomOption = () => options[Math.floor(Math.random() * options.length)];

function App() {

  useEffect(() => {
    setOption(getRandomOption(), [])
  })

  const [ option, setOption ] = useState(getRandomOption());

  return (
    <Container className="App">
      <div className="page">
        <Typography variant="h4" component="h1" gutterBottom>
          {option}
        </Typography>
        <br />
        <Button variant="contained" color="primary" onClick={() => {
          setOption(getRandomOption())
        }}>
          <RefreshIcon />
          New Prompt
        </Button>
      </div>
    </Container>
  );
}
export default App;
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import StartTime from './components/DurationExercise';


function HomeScreen() {
  // these are my three use states
  // this use state sets durationPush to false initially, which can be changed with the setDurationPush call
  const [durationPush, setDurationPush] = useState(true)
  // this use state sets menu to true initially, which can be changed with the setMenu call
  const [menu, setMenu] = useState(true)
  // this use state sets name to -1 initially, which can be changed with the setName call
  const [name, setName] = useState(-1)

  // object array that stores all the button names
  let buttonName = {
    // works if name
    name1: "Push Ups",
    name2: "Bicycling",
    name3: "Jumping Jacks",
    name4: "Running",
    name5: "Sit Ups"
  };

  // returns either the menu screen or the timer tasks
  return <>
    {
      // if the "menu" is true, we run this code (menu was initially set to true so the first part displays automatically)
      (menu
        ?
        <>
          <h1>Get Into It</h1>
          <p>Select one of the activities down below and start moving! </p>
          <button onClick={() => { setDurationPush(false); setMenu(false); setName(0) }}>{buttonName.name1}</button>
          <br /> 
          <br /> 
          <button onClick={() => { setDurationPush(true); setMenu(false); setName(1) }}>{buttonName.name2}</button>
          <br />
          <br /> 
          <button onClick={() => { setDurationPush(false); setMenu(false); setName(2) }}>{buttonName.name3}</button>
          <br />
          <br /> 
          <button onClick={() => { setDurationPush(true); setMenu(false); setName(3) }}>{buttonName.name4}</button>
          <br />
          <br /> 
          <button onClick={() => { setDurationPush(false); setMenu(false); setName(4) }}>{buttonName.name5}</button>
        </>
        // else if menu is false (happes when the user clicks any of the exercise buttons), this will display
        :
        <>
          {/* calls ExerciseButton component and passes in variables that set to other variables that can be accessed via props in the ExerciseButton component */}
          <ExerciseButton isDuration={durationPush} bName={buttonName} labelName={name} menus={menu} />

          {/* this will change the state of setMenu once Return is clicked */}
          <div>
            <br />
            <br />
            <button onClick={() => setMenu(true)}>Return</button>
          </div>
        </>
      )
    }
  </>
}


// this function will be responsible for determining what component to run: duration or repetition
function ExerciseButton(props) {
  // passes the props values into variables
  const isDuration = props.isDuration;
  let bName = props.bName;
  let labelName = props.labelName;

  // initializes variable
  let display;

  // tests for each value passed into labelName by props depending on what button was pushed in HomeScreen; 
  // depending on labelName's value, we are able to pass in the  name from the button so it displays on each exercise screen
  if (labelName === 0) {
    display = bName.name1;
  }
  else if (labelName === 1) {
    display = bName.name2;
  }
  else if (labelName === 2) {
    display = bName.name3;
  }
  else if (labelName === 3) {
    display = bName.name4;
  }
  else if (labelName === 4) {
    display = bName.name5;
  }

  // if isDuration is true (meaning that the button is a duration task, we run that StartTime component)
  if (isDuration) {
    // passes the name of the task (passed into display) into name 
    return <StartTime name={display}></StartTime>;
  }
  // else if the isDuration is false (meaning that the button is a repetion task, we run the repetition component)
  return <RepetitionExercise name={display}></RepetitionExercise>;
}

function App() {
  return (
    <div className='App'>
      {/* calls the HomeScreen functional component */}
      <HomeScreen />
    </div>
  );
}

export default App;
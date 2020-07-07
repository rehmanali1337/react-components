import React from 'react';
import './App.css';
import MyButton from './Button'
import TopBar from './TopBar'



function clickFun() {
  alert('Clicked!')
}

function App() {
  return (
    <div className='App'>
      <TopBar />
      <MyButton variant='contained' text='Click Me' onClick={clickFun} />
    </div>
  );
}

export default App;

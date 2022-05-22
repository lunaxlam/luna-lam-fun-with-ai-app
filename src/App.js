import { useState } from 'react'
import Header from './components/Header'
import EnterPrompt from './components/EnterPrompt'
import Responses from './components/Responses'


// Get Response
const getResponse = (prompt) => {

  }   

function App() {



  return (
    <div className="container">
      <Header text='Fun with AI'/>
      <EnterPrompt label='Enter prompt' onEnter={getResponse}/>
      <Responses />
    </div>
  );
}

export default App;

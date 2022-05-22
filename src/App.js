import { useState } from 'react'
import Header from './components/Header'
import EnterPrompt from './components/EnterPrompt'
import Responses from './components/Responses'


function App() {

  const [responses, setResponse] = useState([])

  const getResponse = (prompt) => {
    const data = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      };
      
      fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
      },
      body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {

        const response = data["choices"][0]["text"];
        const newPromptResponse = {id: Math.floor(Math.random() * 1000), key: prompt, value: response};

        setResponse([newPromptResponse, ...responses ]);
      })
    }   
  return (
    <div className="container">
      <Header text='Welcome to Hello AI'/>
      <EnterPrompt label='Enter prompt' onEnter={getResponse}/>
      <Responses responses={responses}/>
    </div>
  );
}

export default App;

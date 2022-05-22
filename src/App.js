import { useEffect, useState } from 'react'
import Header from './components/Header'
import EnterPrompt from './components/EnterPrompt'
import Responses from './components/Responses'
import Footer from './components/Footer'


function App() {

  const [responses, setResponse] = useState([])

  // Get data from server and update piece of state
  useEffect(() => {
    fetch('http://localhost:5000/responses')
      .then((res) => res.json())
      .then((data) => {
        setResponse(data)
      });
  }, []);

  // Make API call, store in db, and update piece of state on the client-side
  const handleResponse = (prompt) => {

    // Required endpoint parameters
    const data = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      };
      
      // OpenAI API call
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
        const newPromptResponse = {prompt: prompt, text: response};

        // Send data to store in server
        return fetch('http://localhost:5000/responses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newPromptResponse)
        })
          .then((res) => res.json())
          .then((savedPromptResponse) => {

            // Update piece of state
            setResponse([savedPromptResponse, ...responses]);
          })
      })
    }     
  return (
    <>
      <div className="container">
        <Header text='Welcome to Hello AI'/>
        <EnterPrompt label='Enter prompt' getResponse={handleResponse}/>
        <Responses responses={responses}/>
      </div>
      <Footer />
    </>
  );
}

export default App;

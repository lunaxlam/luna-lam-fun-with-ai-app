import { useState } from 'react'

const EnterPrompt = ({label, onEnter}) => {

  const [enteredText, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!enteredText) {
      alert('You must enter a prompt. Try again!')
      return
    }

    onEnter(enteredText)

    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='form-control'>
        <label>{label}</label>
        <textarea name='enter-prompt' 
          placeholder='Example: Write a tagline for an ice cream shop'
          value={enteredText} 
          onChange={(e) => setText(e.target.value)}>
        </textarea>
        <input type='submit' value='Submit' />  
        </div>
    </form>
  )
}

export default EnterPrompt

import { useState } from 'react'

const EnterPrompt = ({label, onEnter}) => {

  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('You must enter a prompt. Try again!')
      return
    }

    onEnter({text})

    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='form-control'>
        <label>{label}</label>
        <textarea name='enter-prompt' 
          id='form-textarea' 
          value={text} 
          onChange={(e) => setText(e.target.value)}>
        </textarea>
        <input type='submit' value='Submit' />  
        </div>
    </form>
  )
}

export default EnterPrompt

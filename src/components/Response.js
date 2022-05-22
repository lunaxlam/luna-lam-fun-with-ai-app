const Response = ({ response }) => {
  return (
    <div className='response'>
      <table>
        <tbody>
          <tr>
            <th>Prompt:</th>
            <th className='response'>{response.prompt}</th>        
          </tr>
          <tr>
            <th>Response:</th>
            <th className='response'>{response.text}</th>        
          </tr>
        </tbody>
      </table>
    </div>
  )
}
  
export default Response
  
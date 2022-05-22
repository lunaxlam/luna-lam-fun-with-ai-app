const Response = ({ response }) => {

    return (
      <div className='response'>
        <table>
          <tbody>
            <tr>
              <th className='main-th'>Prompt:</th>
              <th>{response.key}</th>        
            </tr>
            <tr>
              <th className='main-th'>Response:</th>
              <th>{response.value}</th>        
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  
  export default Response
  
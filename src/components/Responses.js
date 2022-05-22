import Response from './Response'

const Responses = ({ responses }) => {

  return (
    <div className='responses-control'>
        <h2>Responses</h2>
        {responses.map((response) =>
          <Response key={response.id} response={response} />
        )}
    </div>
  )
}

export default Responses

const QuestionTile = ({ id, question, answer }) => {
  return (
    <div className='questionTile' id={id}>
      <h1 className='you'>You: </h1>
      <h1 className='question'>{question}</h1>
      <h1 className='oracleOliver'>Oracle Oliver:</h1>
      <h1 className='answer'>{answer}</h1>
    </div>
  )
}

export default QuestionTile

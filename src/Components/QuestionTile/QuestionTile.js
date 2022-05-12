const QuestionTile = ({ key, question, answer }) => {
  return (
    <div className='questionTile' id={key}>
      <h1 className='you'>You: </h1>
      <h1 className='question'>{question}</h1>
      <br />
      <h1 className='oracleOliver'>Oracle Oliver: </h1>
      <h1 className='answer'>{answer}</h1>
    </div>
  )
}

export default QuestionTile

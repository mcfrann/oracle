import QuestionTile from '../QuestionTile/QuestionTile'

const QuestionContainer = ({ conversation }) => {
  const questions = conversation.map((convo) => {
    if (convo.you && convo.oracleOliver) {
      return (
        <QuestionTile
          id={convo.id}
          key={convo.id}
          question={convo.you}
          answer={convo.oracleOliver}
        />
      )
    } else {
      return <h1 key='none'>Ask Oracle Oliver a question...</h1>
    }
  })

  return <section className='questionContainer'>{questions}</section>
}

export default QuestionContainer

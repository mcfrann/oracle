import QuestionTile from '../QuestionTile/QuestionTile'

const QuestionContainer = ({ conversation }) => {
  const questions = conversation.map((convo) => {
    return (
      <QuestionTile
        key={convo.id}
        question={convo.you}
        answer={convo.oracleOliver}
      />
    )
  })

  return <section className='questionContainer'>{questions}</section>
}

export default QuestionContainer

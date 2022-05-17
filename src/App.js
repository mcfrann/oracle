import './App.css'
import { useState } from 'react'
import Form from './Components/Form/Form'
import QuestionContainer from './Components/QuestionContainer/QuestionContainer'

const App = () => {
  const [conversation, setConversation] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <main className='App'>
      <section className='form-container'>
        <Form
          conversation={conversation}
          setConversation={setConversation}
          setIsLoading={setIsLoading}
        />
        <QuestionContainer conversation={conversation} isLoading={isLoading} />
      </section>
    </main>
  )
}

export default App

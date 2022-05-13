export const postQuestion = (questionPrompt) => {
  const apiPrompt = {
    prompt: `The Oracle is an existential oracle that predicts the future and answers deep questions:\n\nYou: What is the meaning of life?\nOracle: To give meaning to the meaningless.\nYou: Is it fun being an oracle?\nOracle: Being omniscient is both a blessing and a curse.\nYou: What time is it?\nOracle: Time is an illusion.\nYou: How old am I?\nOracle: Considering the exspanse of time, you have barely existed.\nYou: Can you tell me a joke?\nOracle: Your idea of reality is a joke.\nYou: Am I pretty?\nOracle: Beauty is a construct. Ask yourself instead, "what is pretty?".\nYou: When will I die?\nOracle: Time is an illusion, but don't forget to look both ways before crossing the street.\nYou: Who will I marry?\nOracle: A fellow clump of matter and energy.\nYou:
      ${questionPrompt}\nOracle:`,
    temperature: 0.5,
    max_tokens: 60,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.0
  }

  return fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
    body: JSON.stringify(apiPrompt)
  })
}

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const VoteText = ({anecdote, vote}) => (
  <div>
    <p>{anecdote}</p>
    <p>has {vote} votes</p>
  </div>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, newVote] = useState(new Array(anecdotes.length).fill(0))

  const addVote = () => {
      const copy = [...vote]
      copy[selected] += 1
      newVote(copy)
  }

  const SelectAnecdote = () => setSelected(Math.floor(Math.random() * (5 - 0 + 1)) + 0)

  return (
    <div>
      <VoteText anecdote={anecdotes[selected]} vote={vote[selected]} />
      <Button onClick={addVote} text='vote' />
      <Button onClick={SelectAnecdote} text='next anecdote' />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
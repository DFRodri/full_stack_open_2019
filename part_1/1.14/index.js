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
  const copy = [...vote]

  const addVote = () => {
      const votes = [...vote]
      votes[selected] += 1
      newVote(votes)
  }

  const hVote = Math.max(...copy)

  const highestAnecdote = props.anecdotes[copy.indexOf(Math.max(...copy))]

  const SelectAnecdote = () => setSelected(Math.floor(Math.random() * (5 - 0 + 1)) + 0)

  const titles = {
    header: 'Anecdote of the day',
    mostVotes: 'Anecdote with most votes'
  }

  return (
    <div>
      <h1>{titles.header}</h1>
      <VoteText anecdote={anecdotes[selected]} vote={vote[selected]} />
      <Button onClick={addVote} text='vote' />
      <Button onClick={SelectAnecdote} text='next anecdote' />
      <h1>{titles.mostVotes}</h1>
      {highestAnecdote}
      <p>This anecdote has {hVote} votes!</p>
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
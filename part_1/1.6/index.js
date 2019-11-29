import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <h1>
        {props.titles.header}
      </h1>
    </div>
  )
}

const Stats = (props) => {
  return(
    <div>
      <h1>
        {props.titles.results}
      </h1>
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)
  
  const titles = {
    header: 'give feedback',
    results: 'statistics',
    cat1: 'good',
    cat2: 'neutral',
    cat3: 'bad'
  }

  const Results = (props) => {
    return(
      <div>
        <p>
          {props.titles.cat1 + ' ' + good}<br/>
          {props.titles.cat2 + ' ' + neutral}<br/>
          {props.titles.cat3 + ' ' + bad}
        </p>
      </div>
    )
  }

  return (
    <div>
      <Header titles={titles} />
      <Button onClick={goodClick} text='good' />
      <Button onClick={neutralClick} text='neutral' />
      <Button onClick={badClick} text='bad' />
      <Stats titles={titles} />
      <Results titles={titles} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
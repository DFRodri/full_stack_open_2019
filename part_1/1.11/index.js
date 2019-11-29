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

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Info = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props, {good, neutral, bad}) => {
  const sumClick = props.good + props.neutral + props.bad

  let avgClick = 0
  if (sumClick !== 0){
    avgClick = ((props.good - props.bad) / sumClick).toFixed(2)
    }

  let perctClick = 0
  if (sumClick !== 0){
    perctClick = (props.good * 100 / sumClick).toFixed(2)
  }

  if((props.good + props.neutral + props.bad) === 0){
    return(
      <table>
        <tbody>
          <Info text='No feedback given' value='' />
        </tbody>
      </table>
    )
  }

  return(
    <div>
      <table>
        <tbody>
              <Info text={props.titles.good} value={props.good} />
              <Info text={props.titles.net} value={props.neutral} />
              <Info text={props.titles.bad} value={props.bad} />
              <Info text={props.titles.all} value={sumClick} />
              <Info text={props.titles.avg} value={avgClick} />
              <Info text={props.titles.pos} value={perctClick + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

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
    good: 'good',
    net: 'neutral',
    bad: 'bad',
    all: 'all',
    avg: 'average',
    pos: 'positive'
  }

  return (
    <div>
      <Header titles={titles} />
      <Button onClick={goodClick} text='good' />
      <Button onClick={neutralClick} text='neutral' />
      <Button onClick={badClick} text='bad' />
      <Stats titles={titles} />
      <Statistics titles={titles} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
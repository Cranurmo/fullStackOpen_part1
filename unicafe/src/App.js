import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = (props)=>{
  return props.title
}

const FeedBack = (props)=>{
  return(
    <>
      <h1>Give Feedback</h1>
      <button onClick={props.good}>Good</button>
      <button onClick={props.neutral}>Neutral</button>
      <button onClick={props.bad}>Bad</button>
    </>
  )
}

const NoFeedback = ()=> <h2>No Feedback given</h2>

const Statistics = (props)=>{
  return(
    <>
    {props.all > 0 ? <>
    <table>
      <tr> <td>Good</td> <td>{props.good}</td> </tr>
      <tr> <td>Neutral</td> <td>{props.neutral}</td> </tr>
      <tr> <td>Bad</td> <td>{props.bad}</td> </tr>
      <tr> <td>All</td> <td>{props.all}</td> </tr>
      <tr> <td>Average</td> <td>{props.average}</td> </tr>
      <tr> <td>Positive</td> <td>{props.positive}%</td> </tr>
    </table>

    </>: <><NoFeedback /></> }
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const plusGood = ()=> setGood(good+1) 

  const plusNeutral = ()=>  setNeutral(neutral+1) 

  const plusBad = ()=> setBad(bad+1)
  
  const all = good+neutral+bad;

  const title = 'UNICAFE'
  return (
    <div>
      <Title title={title}/>
      <FeedBack good={plusGood} neutral={plusNeutral} bad={plusBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={(good+0-bad)/all} positive={(good/all)*100}/>

    </div>
  )
}

export default App

ReactDOM.render(<App />, 
  document.getElementById('root')
)
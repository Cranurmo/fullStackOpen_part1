import React, { useState } from "react";

const App = (props) => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [mostVoted, setMostVoted] = useState(0)
  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  
  const handleVotes = () => {
      const votes = { ...points };
      votes[selected] += 1;
      setPoints(votes);
      
    let max = 0;
    Object.entries(points).forEach(([key, value]) => {
        if(value >= max){
            max = value
            setMostVoted(key)
        }
      });
      console.log(mostVoted);
      console.log(max)
      console.log(points)
  };

  return (
    <div>
      <h1>Anecdotes</h1>
      <h3>{anecdotes[selected]}</h3>
      <button style={{ cursor: "pointer" }} onClick={handleAnecdote}>
        Next anecdote
      </button>
      <button style={{ cursor: "pointer" }} onClick={handleVotes}>
        Vote
      </button>
      <h3>{anecdotes[mostVoted]} it has {points[mostVoted]} votes.</h3>
    </div>
  );
};

export default App;

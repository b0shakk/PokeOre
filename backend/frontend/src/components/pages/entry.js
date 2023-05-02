import "./entry.css";

function Entry(props){
  return (
      <div className="entry">
        <h2 >  Alchemist {props.name}'s Score is {props.score} and Skill Rating: {props.softskill}</h2>
      </div>
  )
}

export default Entry;
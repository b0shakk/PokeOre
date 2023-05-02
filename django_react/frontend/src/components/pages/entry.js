function Entry(props){
  return (
      <div className="entry">
        <h3 >  Username: {props.name} Score: {props.score} Skill Rating: {props.softskill}</h3>
      </div>
  )
}

export default Entry;
type Greeting1Props = {
  thing: string
  greet: string
}

const Bruno: React.FC<Greeting1Prop> = (props) => {
  return(
    <div className="Greeting1">
      <p>{props.greet1} Jaime ¡Toma {props.myJoke}!</p>
    </div>
  )
}

export default Greeting1;
type BrunoProps = {
  thing: string
  greet: string
}

const Bruno: React.FC<BrunoProps> = (props) => {
  return(
    <div className="Bruno">
      <p>{props.greet} Serafin ¿Quieres un {props.thing}?</p>
    </div>
  )
}

export default Bruno;
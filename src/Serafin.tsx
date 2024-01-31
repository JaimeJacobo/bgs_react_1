type SerafinProps = {
    name: string
    greet: string
  }
  
  const Serafin: React.FC<SerafinProps> = ({name, greet}) => {
    return(
      <div className="Bruno">
        <p>Hola {name} {greet}</p>
      </div>
    )
  }
  
  export default Serafin;
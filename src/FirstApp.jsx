import  PropTypes  from "prop-types";



export const FirstApp = ({title, name}) => {
  // console.log(props)
  
  return (
    <>
       
        <h4>{title}</h4>
        <h2>{name}</h2>
       
    
    </>
    
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired, //lo obligo a que lo envie
  name: PropTypes.string.isRequired
}//Propertis con types

// definir las prop por defecto
FirstApp.defaultProps = {
  // title :'No hay titulo',
  name: 'No hay nombre'
}
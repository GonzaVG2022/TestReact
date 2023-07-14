import  PropTypes  from "prop-types";



export const FirstApp = ({title, name,subTitle}) => {
  // console.log(props)
  
  return (
    <>
       
        <h1 data-testid='test-title'>{title}</h1>
        <h2>{name}</h2>
        <h3>{subTitle}</h3>
        <h3>{subTitle}</h3>
    
    </>
    
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired, //lo obligo a que lo envie
  name: PropTypes.string.isRequired
}//Propertis con types

// definir las prop por defecto
FirstApp.defaultProps = {
  title :'No hay titulo',
  subTitle: 'Holiiiis',
  name: 'No hay nombre'
}
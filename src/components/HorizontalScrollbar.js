

import BodyPart from './BodyPart';

// import '../components/horizon_styles.css'


const HorizontalScrollbar = ({data,bodyParts, setBodyPart, bodyPart}) => {  

  return (

    <BodyPart data={data} setBodyPart={setBodyPart}/>
  )
}

export default HorizontalScrollbar
import React from 'react'
import '../components/horizon_styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell }from '@fortawesome/free-solid-svg-icons'
const BodyPart = ({data,setBodyPart}) => {
    return (

        <div className='media-scroller' >
            {data.map((item) => (
                <div className='media-element' key={item.id || item}>
                    <FontAwesomeIcon className='icn' icon={faDumbbell} size="6x" onClick={() =>
                        {setBodyPart(item)
                        window.scrollTo({ top: 1400, behavior: 'smooth' });}}/>
                    {item}
                </div>
            ))}
        </div>

    )
}

export default BodyPart
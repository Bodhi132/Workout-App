import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell }from '@fortawesome/free-solid-svg-icons'
import '../components/E_card.css'

const ExerciseCard = ({exercise}) => {
  return (
    <div className='main'>
    <FontAwesomeIcon className='icn' icon={faDumbbell} />
    <span className='type'>{exercise}</span>
    </div>
  )
}

export default ExerciseCard
import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Ex_itemsStyles.css'

const ExerciseItems = ({exercises}) => {
  return (
    <Link className='e_items' to={`/exercise/${exercises.id}`}>
      <img src={exercises.gifUrl}></img>
        <div className='btns'>
          <button id='btn1'>{exercises.bodyPart}</button>
          <button id='btn2'>{exercises.target}</button>
        </div>
        <h3>{exercises.name}</h3>
        
    </Link>
  )
}

export default ExerciseItems
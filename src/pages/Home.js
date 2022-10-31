import React from 'react'
import { useState } from 'react'
import Herobanner from '../components/Herobanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import '../pages/Home_styles.css'

const Home = () => {

  const [bodyPart, setbodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  console.log(bodyPart)

  return (
    <div className='main_comps'>
      <Herobanner/>
      <SearchExercises bodyPart={bodyPart} setbodyPart={setbodyPart} setExercises={setExercises}/>
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}/>
    </div>
  )
}

export default Home
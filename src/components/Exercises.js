

import React from 'react'
import '../components/exerciseStyles.css'
import ExerciseItems from './ExerciseItems'
import { useState, useEffect } from 'react'
import { fetchData, excerciseOptions } from '../utils/fetchData'





const Exercises = ({ setExercises, exercises, bodyPart }) => {

  const [currentPage, setcurrentPage] = useState(1)
  const [exercisesPerPage] = useState(6)

  useEffect(() => {

    const fetchExercisesData = async () => {
      let exerciseData = []

      if (bodyPart === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions)
      }

      else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, excerciseOptions)
      }

      setExercises(exerciseData)
    }

    fetchExercisesData()

  }, [bodyPart])

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);




  return (

      <div className='ex_main' id='exercises'>
        <h2>Exercises</h2>
        <div className='ex_main_items'>
          {currentExercises.map((exercises, idx) => (
            <ExerciseItems key={idx} exercises={exercises} />
          ))}
        </div>
      </div>

  )
}

export default Exercises
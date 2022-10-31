import React from 'react'
import ExerciseVideos from '../components/ExerciseVideos'
import Detail from '../components/Detail'
import '../pages/Ex_details.css'
import { excerciseOptions,fetchData,youtubeOptions } from '../utils/fetchData'
import {  useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);


  const {id} = useParams()


  useEffect(() => {
    
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, excerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

    };

    fetchExercisesData();

  }, [id])
  
  return (
    <div className='detailings'>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    </div>
  )
}

export default ExerciseDetail
import React from 'react'
import { useState,useEffect } from 'react'
import '../components/Search_exr.css'
import HorizontalScrollbar from '../components/HorizontalScrollbar.js'
import { excerciseOptions,fetchData } from '../utils/fetchData'



const SearchExercises = ({setExercises, bodyPart, setbodyPart}) => {

  const [bodyparts, setBodyparts] = useState([])
  const [search, setSearch] = useState('');


  useEffect(() => {
    
    const fetchDataExercises = async () =>
    {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',excerciseOptions)
      setBodyparts(['all',...bodyPartData])
    }

    fetchDataExercises()
  }, [])

  const handleSearch = async () => {
    window.scrollTo({ top: 1400, behavior: 'smooth' })
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setExercises(searchedExercises);
      
    }
  };
  

  return (
    <div className='search-main'>
      <div className='head'>
        Awesome Exercises You <br /> Should Know
      </div>
      <div className='search_bar'>
        <input type="text" placeholder="Search Exercises.."  onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
        <button className='s_btn' onClick={handleSearch} >Search</button>
      </div>
      <div className='scrolls'>
        <HorizontalScrollbar data={bodyparts} bodyparts setBodyPart={setbodyPart} bodyPart={bodyPart}/>
      </div>
    </div>
  )
}

export default SearchExercises
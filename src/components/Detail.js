import React from 'react'

import bodyPartImage from '../assets/bodyPart.png'
import equipmentImage from '../assets/equipment.png'
import targetImage from '../assets/target.png'
import '../components/det.css'

const Detail = ({exerciseDetail}) => {

  const {bodyPart,gifUrl, name, target, equipment} = exerciseDetail

  const extraDetail =
  [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: targetImage,
      name: target,
    },
    {
      icon: equipmentImage,
      name: equipment,
    }
  ]

  return (
    <div className='det'>
      <img className='gifImag' src={gifUrl} />
      <div className='det_sub'>
        <h2>{name}</h2>
        Exercises keep you strong.{' '}
        <span style={{ textTransform: 'capitalize' }}>{name}</span>  is one
        of the best <br /> exercises to target your {target}. It will help you improve your{' '}
        <br /> mood and gain energy.
        <div>
        {extraDetail?.map((item) => (
          <div key={item.name} className='ex_detail'>
              <img className='e_dtail' src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
              {item.name}
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Detail
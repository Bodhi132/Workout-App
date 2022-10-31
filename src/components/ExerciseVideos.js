import React from 'react'
import '../components/ex_videos.css'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <div className='main_ex_vid'>
      <div className='v_head'>
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </div>
      <div className='sub_vid'>
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              {item.video.title}
              {item.video.channelName}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ExerciseVideos
import React from 'react'

const Video = ({title, duration,channel,channelId, view, time,code}) => {
  return (
    <a href={`https://www.youtube.com/watch?v=${code}`}>
      <div className="thumb cursor-pointer rounded-xl overflow-hidden" data-duration={duration}>
        <img src={`https://i.ytimg.com/vi/${code}/hqdefault.jpg`} alt="thumbnail" />
      </div>
      <div className="info cursor-pointer my-3 flex gap-2 items-start">
        <img className='w-10 rounded-full' src={channelId} alt="logo" />
        <div className="video flex-1 flex flex-col gap-2">
          <h2 className='text-sm font-medium'>{title}</h2>
          <span className='flex flex-col'>
            <small className='font-medium text-gray-300'>{channel}</small>
            <small className='font-medium text-gray-300'>{view} views • {time}</small>
          </span>
        </div>
      </div>
    </a>
  )
}

export default Video
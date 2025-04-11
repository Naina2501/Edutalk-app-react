import React, { useRef } from 'react'
import "./Videolibrary.css"
import video from "../../assets/video.mp4"

const VideoPlayer = ({playState,setPlayState}) => {
  const player=useRef(null);
  

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player}
    >
        <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer

import React from "react"
import YouTube from "react-youtube"

const videoOptions = {
  playerVars: {
    autoplay: 1,
    controls: 0,
    rel: 0,
    showinfo: 0,
  },
}

function onReady(event) {
  event.target.mute()
}

function onEnd(event) {
  event.target.playVideo()
}

const Hero = () => (
  <div>
    <YouTube
      videoId="BFWtG59Xm7w"
      opts={videoOptions}
      className="video-iframe"
      onReady={onReady}
      onEnd={onEnd}
    />
  </div>
)

export default Hero

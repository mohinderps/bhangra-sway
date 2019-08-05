import React from "react"
import YouTube from "react-youtube"
import styled from "styled-components"

const VideoBackgroundStyledDiv = styled.div`
  background: #000;
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: -99;
  overflow: hidden;

  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
  }
`

const VideoForegroundStyleDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  @media (min-aspect-ratio: 16/9) {
     {
      height: 300%;
      top: -100%;
    }
  }

  @media (max-aspect-ratio: 16/9) {
     {
      width: 450%;
      left: -150%;
    }
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`

class Hero extends React.Component {
  videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
    },
  }
  onReady(event) {
    event.target.mute()
  }

  onEnd(event) {
    event.target.playVideo()
  }

  render() {
    return (
      <VideoBackgroundStyledDiv>
        <VideoForegroundStyleDiv>
          <YouTube
            videoId="BFWtG59Xm7w"
            opts={this.videoOptions}
            className="video-iframe"
            onReady={this.onReady}
            onEnd={this.onEnd}
          />
        </VideoForegroundStyleDiv>
      </VideoBackgroundStyledDiv>
    )
  }
}

export default Hero

import React from "react"
import YouTube from "react-youtube"
import styled from "styled-components"

const VideoBackgroundStyledDiv = styled.div`
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -99;

  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.75);
  }
`

const VideoForegroundStyleDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

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

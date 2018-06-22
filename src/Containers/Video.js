import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Player} from 'video-react'

import Video from '../Icones/Final_1.mp4'

class VideoPage extends Component {
  render() {
    return(
      <Player src={Video} />
    );
  }
}
export default VideoPage;

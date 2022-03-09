import React from 'react';

import {
  NavLink,
} from 'react-router-dom';

const home = () => (
  <div className="body-container body-container-home">
    <br></br><br></br><br></br><br></br>
    <video id="main-video" loop autoPlay muted>
      <source src="exampleVideo.mp4" type="video/mp4"/>
    </video>
    <h4>Anointed by Kathy Jetnil-Kijiner &amp; Dan Lin </h4>
    <br></br><br></br><br></br>
    <h3>Since 1945, the United States alone has tested over 2,000 nuclear bombs.</h3>
    <h3>The radiation and nuclear waste produced by nuclear weapons development and testing {'\n'}
        have devastated multiple generations of peoples and communities near testing sites around the globe.</h3>
    <h3>Today, affected communities like Marshall Islanders and Hanford Downwinders are still fighting for justice.</h3>
    <h3>This is a story you never heard of.</h3>
    <h3>This is a story we want to share.</h3>
    <h3>This is the story of us.</h3>
  </div>
);

export default home;

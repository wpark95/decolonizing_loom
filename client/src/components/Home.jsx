import React from 'react';

import {
  NavLink,
} from 'react-router-dom';

const home = () => (
  <div className="body-container body-container-home">
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <h1>Anointed by Kathy Jetnil-Kijiner &amp; Dan Lin </h1>
    <video id="main-video" loop autoPlay muted >
      <source src="exampleVideo.mp4" type="video/mp4"/>
    </video>
    <br></br><br></br>
    <h3>Since 1945, the United States alone has tested over 2,000 nuclear bombs.</h3>
    <h3>Nuclear weapons development and testing has devastated numerous communities since then.</h3>
    <h3>Today, affected peoples and communities are still fighting for their rights</h3>
  </div>
);

export default home;

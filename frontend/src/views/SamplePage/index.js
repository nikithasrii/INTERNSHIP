import React from 'react';
// import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';
import './index.css';
// project import
// import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.jpg';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  return (
    <>
     <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                    <h2><center><b >ECE</b></center></h2>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img1} alt = ""/></center>
                <br/>
              <p>
              An Electrical and Computer Engineering lab is where students and enthusiasts explore the fascinating world of electronics and 
              computers. Fitted with tools like soldering irons, circuit boards, and computers.
            </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                <h2><center><b >CSE</b></center></h2>
                  
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img2} alt = ""/></center>
                <br></br>
              <p>A Computer Science and Engineering department is the heart of technological innovation,
                 where students delve into the world of programming, algorithms, and software engineering.
            </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                  <h2><center><b >EEE</b></center></h2>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img3} alt = ""/></center>
                <br></br>
              <p>
              Equipped with state-of-the-art equipment such as oscilloscopes, microcontrollers, 
              and power supplies, the EEE lab is a hands-on playground for experimentation and 
              exploration. </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                  <h2><center><b >MECH</b></center></h2>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img6} alt = ""/></center>
                <br></br>
              <p>
              From designing efficient engines and robotics to optimizing manufacturing processes, students tackle real-world challenges under 
              the guidance of expert faculty. With a hands-on approach to learning.
            </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                  <h2><center><b >CIVIL</b></center></h2>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img4} alt = ""/></center>
                <br></br>
              <p>
              A Civil Engineering (CIVIL) department is the cornerstone of infrastructure and urban development. 
              It is a vibrant hub where students explore the principles of structural design, transportation systems,
               and environmental engineering. 
            </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                  <h2><center><b >IOT</b></center></h2>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img5} alt = ""/></center>
                <br></br>
              <p>
              Internet of Things (IoT) is the revolutionary technology that connects everyday objects to the internet, enabling them to 
              send and receive data. In an IoT ecosystem, devices like sensors, actuators, and smart appliances communicate with each 
              other and with users, creating a seamless network of information and automation. 
            </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default SamplePage;

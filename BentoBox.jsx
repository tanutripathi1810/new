import {useState} from 'react';
import React from 'react';
import "./styles.css"
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import LineChart from '../Chart/LineChart.jsx';
// import profileImage from '../assets/pexels-drew-williams-1285451-3568520.jpg';
// import bg2 from '../assets/bg2.jpg'
// import bg3 from '../assets/bg3.png'
import { Button } from '@mui/material';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import Image from '../image';
import Modal from '../Modal.jsx';
const BentoBox =()=>{
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="bento-container">

      
      
      <div className="bento-grid">
      <div className='carousel-container'><Image/></div>
        <div className="bento-item graph-section">
            <TimelineRoundedIcon/>
            <h3>Insider stories and latest updates.</h3>
          Recent News.
        </div>
    <div className='blog_faq'>
        <div className="bento-item text-section1">
            <div className='blog-upper'>
                <h3>World of Technology</h3>
                <div className='arrow' onClick={toggleModal}>
                <NorthEastRoundedIcon style={{color:"black",cursor:"pointer", fontSize:"3rem"}}/>
                </div>
            </div>
            <p>400+</p>

          <h1>View our Blog.</h1>
        </div>

        <div className="bento-item text-section2">
        <Button 
                className='btn'
                 variant="contained" style={{color:"white",
                     backgroundColor:"black",
                     width:"10rem",
                     height:"4rem",
                     borderRadius:"2rem",
                     marginTop:"-0.6rem",
                     fontSize:"1.8rem",
                     '&:hover': {
                            backgroundColor: "gray",
                            color:"var(--main-color)",
                            borderColor:"pink",
                            transform: "scale(2)", 
                            transition: "transform 0.3s ease-in-out", 
                }
                     }}>Ask<span><HelpOutlineRoundedIcon/></span></Button>
                     <div className='arrow' onClick={toggleModal}>
                     <NorthEastRoundedIcon style={{color:"black" ,cursor:"pointer",fontSize:"3rem",position:"absolute",top:"2rem",left:"31.5rem"}}/>
                     </div>
                     
          <h2 className='faq-heading1'>Frequently Asked Questions.</h2>
          <h1 className='faq-heading2'>Answers.</h1>
        </div>
        </div>
      </div>
      <Modal show={showModal} onClose={toggleModal} />
    </div>
  )
};

export default BentoBox;
import React, { useState } from 'react';
import MyButton from '../components/MyButton';
import MyPopup from '../components/MyModal';
import MyCarousel from '../components/caraousel';
import Featured from '../components/featured'
import Featured2 from '../components/featured2';
import Portfolio from '../components/portfolio';


function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <MyCarousel />   
      <Featured /> 
      <Featured2 />
      <Portfolio />
    {/* <div className='touchWithUs'> */}
      {/* <MyButton label="Open Popup" onClick={handleButtonClick} /> popup button */}
      {/* {showPopup ? <MyPopup message="Hello, world!" onClose={handleClosePopup} /> : null} */}
        {/* </div> */}
        


      
    </div>
  );
}

export default Home;

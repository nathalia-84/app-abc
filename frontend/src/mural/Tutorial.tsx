import React, { useState } from 'react';
    

    
const Tutorial: React.FC= () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    
    const videoOptions = {
        width: '560',
        height: '315',
    };
    
    const onVideoPlay = (event: any) => {
        setIsVideoPlaying(true);
    };
    
    return (
        <div className='grid grid-row' >
        <div className="font-semibold  text-black flex-grow">        
            <h1>TUTORIAL PROFESSOR</h1>
        </div>
        <div 
        style={{  justifyContent: 'center', cursor: 'pointer',
        backgroundSize: '',
        width: '800px',
        height: '500px', alignItems: 'center' }}
        >
    
        <iframe width="700" height="600" src="https://www.youtube.com/embed/bodoescOc6Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    </div>
    );
};
    

export default Tutorial;
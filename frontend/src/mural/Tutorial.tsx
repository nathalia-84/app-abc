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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div
            className=''
              style={{
                cursor: 'pointer',
                backgroundSize: 'cover',
                width: '600px',
                height: '345px',
            }}>
    
        <iframe width="600" height="345" src="https://www.youtube.com/embed/bodoescOc6Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    </div>
    );
};
    

export default Tutorial;
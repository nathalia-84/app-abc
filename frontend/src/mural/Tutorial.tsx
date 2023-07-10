import React, { useState } from 'react';

const Tutorial: React.FC = () => {
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
      <div className="font-semibold text-black flex-grow mb-20">
        <h1>TUTORIAL PROFESSOR</h1>
      </div>
      <div className=' flex' style={{alignItems: 'center'}}>
      <div
        style={{
          cursor: 'pointer',
          backgroundSize: '',
          width: '700px',
          height: '500px'
        }}
      >
        <iframe
          width="700"
          height="600"
          src="https://www.youtube.com/embed/bodoescOc6Q"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
       
      </div>
      {/* <div style={{  textAlign: 'center', width:'40%', justifySelf: 'end' }}>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ea saepe mollitia optio voluptates consectetur, provident quis nam eius voluptate, perspiciatis illo maiores illum. Sit quibusdam aliquam optio rem explicabo. </p>
        </div> */}
      </div>
    </div>
  );
};

export default Tutorial;

import React from 'react';
import ReactPlayer from 'react-player';

const LivestreamPlayer = ({ url }) => {
  return (
    <div className="flex justify-center mt-12">
    
      <div className="w-3/4 md:w-1/2 lg:w-1/3">
     
        <ReactPlayer
          url={url}
          playing={true}
          controls={true} 
          width="100%" 
          height="auto" 
          className="w-full"
        />
      </div>
    </div>
  );
}

export default LivestreamPlayer;

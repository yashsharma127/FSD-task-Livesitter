// App.js
import React from 'react';
import LivestreamPlayer from './components/LivestreamPlayer';
import OverlayOptions from './components/OverlayOptions';

const App = () => {
  const livestreamUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  return (
    <div>
      <LivestreamPlayer url={livestreamUrl} />
      <OverlayOptions />
    </div>
  );
};

export default App;

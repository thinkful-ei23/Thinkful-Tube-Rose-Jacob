'use strict';

const store = (function(){
  const videos = [];
  
  const setVideos = function(vid) {
    this.videos = vid;
  };

  return {
    videos,
    setVideos,
  };
}());
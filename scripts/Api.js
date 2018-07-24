'use strict';
/* global $ setVideos*/

const api = (function(){
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search'; 
  
  const decorateResponse = function(response) {
    return response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url, 
      };
    });
  };
  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part : 'snippet',
      key : 'AIzaSyCkyNYYCLfSOR83jC4PN6TAAzQNwmun6Ko',
      q: searchTerm,
      type: '',
    };
    $.getJSON(BASE_URL, query, function(response){
      const decoratedResponse = decorateResponse(response);
      callback(decoratedResponse);
    });
  };


  return {
    fetchVideos : fetchVideos
  };
}());
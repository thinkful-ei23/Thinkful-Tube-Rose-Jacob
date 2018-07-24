'use strict';
/* global $ */

const api = (function(){
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search'; 
  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part : 'snippet',
      key : 'AIzaSyCkyNYYCLfSOR83jC4PN6TAAzQNwmun6Ko',
      q: searchTerm,
      type: '',
    };
    $.getJSON(BASE_URL, query, callback);
  };
  return {
    fetchVideos : fetchVideos
  };
}());
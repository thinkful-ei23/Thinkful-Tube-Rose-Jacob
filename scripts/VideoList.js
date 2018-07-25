'use strict';
/* global $ store api setVideos */ 

const videoList = (function() {
  const generateListItem = function(video) {
    return `
    <li data-video-id="${video.id}">
      <h3>${video.title}</h3>
      <a href="https://www.youtube.com/watch?v=${video.id}">
        <img src="${video.thumbnail}" />
      </a>
    </li>
    `;
  };

  const render = function() {
    const htmlString = store.videos.map(video => generateListItem(video));
    $('.results').html(htmlString);
  };

  const handleFormSubmit = function() {
    $('form').submit(function(event) {
      event.preventDefault();
      let searchedInput = $(event.currentTarget).find('#search-term');
      const searched = searchedInput.val();
      searchedInput.val('');
      api.fetchVideos(searched, function(response){
        store.setVideos(response);
        render(); 
      });
    }); 
  };   
  const bindEventListeners = function() {
    handleFormSubmit();
  };    

  return {
    render,
    bindEventListeners,
  };

})(); 

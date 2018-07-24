'use strict';
/* global $ */
const API_KEY = 'AIzaSyCkyNYYCLfSOR83jC4PN6TAAzQNwmun6Ko';

const mockData = {
  'kind': 'youtube#searchListResponse',
  'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/nWpornfimyBcKMYH0-S18JHOzlM"',
  'nextPageToken': 'CAUQAA',
  'regionCode': 'US',
  'pageInfo': {
    'totalResults': 1000000,
    'resultsPerPage': 5
  },
  'items': [
    {
      'kind': 'youtube#searchResult',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Xv0f71hRivXbOFeZ14SKHWY1IJs"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'EtH9Yllzjcc'
      },
      'snippet': {
        'publishedAt': '2017-11-18T21:00:00.000Z',
        'channelId': 'UC3rrzHpFzshYjIMk8YFc52w',
        'title': 'Try Not To Laugh Challenge - Funny Cat & Dog Vines compilation 2017',
        'description': 'Try Not To Laugh or Grin While Watching Funny Dogs & Cats Vines compilation 2017 IMPOSSIBLE CHALLENGE! Subscribe to CooL Vines ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/EtH9Yllzjcc/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/EtH9Yllzjcc/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/EtH9Yllzjcc/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'CooL Vines',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/CIzHxn5Tg3A4s2nJ1YNkNe9bwj8"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'hY7m5jjJ9mM'
      },
      'snippet': {
        'publishedAt': '2017-05-31T09:30:02.000Z',
        'channelId': 'UC9obdDRxQkmn_4YpcBMTYLw',
        'title': 'CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation',
        'description': 'Cats are amazing creatures because they make us laugh all the time! Watching funny cats is the hardest try not to laugh challenge! Just look how all these cats ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/hY7m5jjJ9mM/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Tiger FunnyWorks',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/rXb4BnutEQ543H8-7A55h0jqUvI"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'tzI2g2Uiz8w'
      },
      'snippet': {
        'publishedAt': '2018-07-06T12:00:05.000Z',
        'channelId': 'UCyIqcxz-vR_o2GK4HWuZL8w',
        'title': 'Cat\'s maze. Where\'s the exit???',
        'description': 'The entrance is blocked. The walls are one meter high. No way to find a loophole or a trapdoor. The only one way to escape is to find the exit. Will the cat be able ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/tzI2g2Uiz8w/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/tzI2g2Uiz8w/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/tzI2g2Uiz8w/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'CatPusic',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/x_qS9OFGWgrqGJL3crMvWY_oYxs"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'RIBsfhcAZww'
      },
      'snippet': {
        'publishedAt': '2018-06-15T07:43:26.000Z',
        'channelId': 'UCNo5PGwGmfnEprEUUb9AGgw',
        'title': 'World Cup Cats',
        'description': 'The World Cup inspires Prince Michael\'s journey towards soccer stardom. New Merch: https://shop.aaronsanimals.com/ Gym Girl: Shelise Hufstetler Ref: Robert ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/RIBsfhcAZww/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/RIBsfhcAZww/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/RIBsfhcAZww/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'AaronsAnimals',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/CYY2TYr5zHclu-VtAEK3vReRew4"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'SyPTm7IwFuc'
      },
      'snippet': {
        'publishedAt': '2018-06-19T02:07:29.000Z',
        'channelId': 'UCYFo16eFDNhD3W_POj9gKFw',
        'title': 'Talking Kitty Cat - Meet The New Kitten!',
        'description': 'Sylvester, Random kitty and Gibbyson get to meet the latest addition to the family. Random kitty learns how to be a grandmother, Gibbyson isn\'t sure how to be ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/SyPTm7IwFuc/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/SyPTm7IwFuc/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/SyPTm7IwFuc/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Talking Kitty Cat',
        'liveBroadcastContent': 'none'
      }
    }
  ]
};

/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/
const store = {
  videos: []
};

// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
  const query = {
    part : 'snippet',
    key : 'AIzaSyCkyNYYCLfSOR83jC4PN6TAAzQNwmun6Ko',
    q: searchTerm,
    type: '',
  };
  $.getJSON(BASE_URL, query, callback);
};

// fetchVideos('cat', (response) => console.log(response));
// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  return response.items.map(item => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.default.url
    };
  });
};

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {
  return `
    <li data-video-id="${video.id}">
      <h3>${video.title}</h3>
      <img src="${video.thumbnail}" />
    </li>
  `;  
};
const decoratedVideo = decorateResponse(mockData);
// console.log(generateVideoItemHtml(decoratedVideo));

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.videos
// TEST IT!
const addVideosToStore = function(videos) {
  store.videos = videos;
};
addVideosToStore(decoratedVideo);

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {
  const htmlString = store.videos.map(video => generateVideoItemHtml(video));
  $('.results').html(htmlString);
};
render();
// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {

};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});

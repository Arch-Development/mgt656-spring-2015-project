'use strict';

var events = require('../models/events');

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  
  var contextData = {
    'title': 'Gatsby',
    'tagline': 'Events made awesome',
    'events': events.all,
    
   
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};

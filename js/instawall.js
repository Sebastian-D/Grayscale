"use strict";

console.log("instawall.js begin load");

var loadButton = document.getElementById('load-more');

var feed = new Instafeed({
  get: "tagged",
  tagName: "pants",
  resolution: "low_resolution",
  // resolution: "standard_resolution",
  links: true,
  limit: 9,
  accessToken: "952389.745c638.8db95b408a8c4e5dbcc4365d1d062c8b",
  template: '<div class="item"><a href="{{link}}"><img src="{{image}}" /></a><p>{{caption}}</p></div>',
  after: function() {

    // disable button if no more results to load
    if (!this.hasNext())
      loadButton.setAttribute('disabled', 'disabled');
    }
});

// bind the load more button
loadButton.addEventListener('click', function() {
  feed.next();
});

// Init
feed.run();

console.log("instawall.js done load");

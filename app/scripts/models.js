// This JavaScript "models" is normally the location for all the data to be used such as objecst, functions
var $ = require('jquery');

function Post(){
  console.log("Post is working too!");
}

Post.fetch = function(){
  $.ajax('http://tiny-lasagna-server.herokuapp.com/collections/posts').done(function(posts){
  $(document).trigger('post:fetch', [posts]);
  });
};

module.exports = Post;

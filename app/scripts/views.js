// This JavaScript "views" is normally used for the design functions such as HTML templates
var $ = require('jquery');

function PostView(){
  console.log("PostView working!");
}

PostView.prototype.showPosts = function(posts){
  posts.forEach(function(posts){
  $('.posts').append('<li><h2>' + posts.title + '</h2><p>' + posts.body + '</p></li>');
  });
};

module.exports = PostView;

var $ = require('jquery');
var PostView = require('./views.js');
var Post = require('./models.js');

$(function(){
  var view = new PostView();
  // view.showPosts([
  //   {'title': 'Test Post', 'body': 'Look at this post.'}
  // ]);
  $(document).on('post:fetch', function(event, posts){
    view.showPosts(posts);
  });

  Post.fetch();
});

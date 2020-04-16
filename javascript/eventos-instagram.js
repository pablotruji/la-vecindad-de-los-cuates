function nFormatter(num){
  if(num >= 1000000000){
    return (num/1000000000).toFixed(1).replace(/\.0$/,'') + 'G';
  }
  if(num >= 1000000){
    return (num/1000000).toFixed(1).replace(/\.0$/,'') + 'M';
  }
  if(num >= 1000){
    return (num/1000).toFixed(1).replace(/\.0$/,'') + 'K';
  }
  return num;
  
}

var x = window.matchMedia("(max-width: 1022px)");
var y = window.matchMedia("(min-width: 1023px)");

$.ajax({
  url:"https://www.instagram.com/lavecindad/?__a=1",
  type:'get',
  success:function(response){
    $(".profile-pic").attr('src',response.graphql.user.profile_pic_url);
    $(".name").html(response.graphql.user.full_name);
    // $(".biography").html(response.graphql.user.biography);
    $(".username").html(response.graphql.user.username);
    $(".number-of-posts").html(response.graphql.user.edge_owner_to_timeline_media.count);
    $(".followers").html(nFormatter(response.graphql.user.edge_followed_by.count));
    $(".following").html(nFormatter(response.graphql.user.edge_follow.count));
    posts = response.graphql.user.edge_owner_to_timeline_media.edges;
    posts_html = '';
    for(var i=0;i<posts.length;i++){
      url = posts[i].node.display_url;
      likes = posts[i].node.edge_liked_by.count;
      comments = posts[i].node.edge_media_to_comment.count;
      if (x.matches){
        posts_html += '<div class="col-sm-6 equal-height"><img style="display:block; margin:auto; min-height:40px;background-color:#fff;width:100%" src="'+url+'"><div class="row like-comment"><div class="col-md-4">'+nFormatter(likes)+' LIKES</div><div class="col-md-6">'+nFormatter(comments)+' COMMENTS</div></div></div>';
        $(".posts").html(posts_html);
      }
    } 
      for(var i=0;i<posts.length;i++){
        url = posts[i].node.display_url;
        likes = posts[i].node.edge_liked_by.count;
        comments = posts[i].node.edge_media_to_comment.count;
        if(y.matches){
          posts_html += '<div class="col-sm-3 equal-height"><img style="display:block; margin:auto; min-height:40px;background-color:#fff;width:100%" src="'+url+'"><div class="row like-comment"><div class="col-md-4">'+nFormatter(likes)+' LIKES</div><div class="col-md-6">'+nFormatter(comments)+' COMMENTS</div></div></div>';
          $(".posts").html(posts_html);
        }
      } 
    } 
});



// function myFunction(x) {
//   if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//   } else {
//       document.body.style.backgroundColor = "pink";
//   }   
// }

// myFunction(x)
// x.addListener(myFunction)

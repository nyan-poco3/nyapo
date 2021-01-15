$(function(){
    $('a[data-rel^=lightcase]').lightcase();
});

var headerHeight = 60;
var urlHash = location.hash;
if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top-headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
}

$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500; 
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href); 
      var position = target.offset().top-headerHeight;
      $("html, body").animate({scrollTop:position}, 500);
      return false;
    });
  });
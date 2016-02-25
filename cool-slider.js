$(document).ready(function() {
    $(".paging-dabourphone").show(); 
    $(".paging-dabourphone a:first").addClass("active");

var imageWidth = $(".coolslider-dabourphone").width(); 
var imageSum = $(".dabourphone_img img").size(); 
var imageReelWidth = imageWidth * imageSum;

    $(".dabourphone_img").css({'width' : imageReelWidth});

rotate = function(){ var triggerID = $active.attr("rel") - 1; 

var dabourphone_imgPosition = triggerID * imageWidth;

    $(".paging-dabourphone a").removeClass('active');
        $active.addClass('active');

    $(".cooltitledabourphone").stop(true,true).slideUp('slow');
    $(".cooltitledabourphone").eq( 
    $('.paging-dabourphone a.active').attr("rel") - 1 ).slideDown("slow"); 
    $(".dabourphone_img").animate({left: -dabourphone_imgPosition}, 400 );
    };

rotateSwitch = function(){
    $(".cooltitledabourphone").eq( $('.paging-dabourphone a.active').attr("rel") - 1 ).slideDown("slow");

play = setInterval(function(){
    $active = $('.paging-dabourphone a.active').next();

if ( $active.length === 0) {
    $active = $('.paging-dabourphone a:first'); } rotate(); }, 4000); };

rotateSwitch(); $(".dabourphone_img a, .cooltitledabourphone a").hover(function() {
    clearInterval(play); }, function() { rotateSwitch();
    });
    $(".paging-dabourphone a").click(function() { $active = $(this);
    clearInterval(play); rotate(); rotateSwitch();  return false;
    });
});

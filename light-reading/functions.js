$(document).on('mousemove', function(e){
    $('.bug').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

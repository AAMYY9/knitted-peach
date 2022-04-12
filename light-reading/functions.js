// $(function() {
//     var bug = $(".bug"), sHeight = bug.outerHeight(),
//                 sWidth = bug.outerWidth(), atan,
//                 sTop = bug.offset().top, sLeft = bug.offset().left;
//
//     $(document).on("mousemove", function(e) {
//         // console.log(e.pageX, " ", e.pageY)
//         atan = Math.atan2(e.pageY - sTop , e.pageX - sLeft )
//         console.log(atan)
//         bug.css({"transform" : "rotate("  + atan +  "rad)"} )
//     })
// })
$(function() {
    var bug = $(".bug"), sHeight = bug.outerHeight(),
                sWidth = bug.outerWidth(), atan,
                sTop = bug.offset().top, sLeft = bug.offset().left;

    $(document).on("mousemove", function(e) {
        // console.log(e.pageX, " ", e.pageY)
        atan = Math.atan2(e.pageY - sTop , e.pageX - sLeft )
        console.log(atan)
      bug.css({"transform" : "rotate("  + atan +  "rad)"} )
    })
})
$(document).on('mousemove', function(e){
    let bugX = 0;
    let bugY = 0;
    $('.bug').css({
       left:  e.pageX,
       top:   e.pageY
    });
    $('.light').css({
       left:  e.pageX - 100,
       top:   e.pageY - 100
    });
});

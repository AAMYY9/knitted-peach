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

// $(function() {
//     var bug = $(".bug"), sHeight = bug.outerHeight(),
//                 sWidth = bug.outerWidth(), atan,
//                 sTop = bug.offset().top, sLeft = bug.offset().left;
//
//     $(document).on("mousemove", function(e) {
//         // console.log(e.pageX, " ", e.pageY)
//         atan = Math.atan2(e.pageY - sTop , e.pageX - sLeft )
//         console.log(atan)
//       bug.css({"transform" : "rotate("  + atan +  "rad)"} )
//     })
// })




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

    function getCenter(element) {
        const {left, top, width, height} = element.getBoundingClientRect();
        return {x: left + width / 2, y: top + height / 2}
    }

    const bug = document.querySelector(".bug");
    const bugCenter = getCenter(bug);
    addEventListener("mousemove", ({clientX, clientY}) => {
        const angle = Math.atan2(clientY - bugCenter.y, clientX - bugCenter.x);
        bug.style.transform = `rotate(${angle}rad)`;
    });

    const moth = document.querySelector(".moth");
    const mothCenter = getCenter(moth);
    addEventListener("mousemove", ({clientX, clientY}) => {
        const angle = Math.atan2(clientY - mothCenter.y, clientX - mothCenter.x);
        moth.style.transform = `rotate(${angle}rad)`;
    });
});



// // moth
// $(document).ready(function(){
//     animateDiv();
//
// });
//
// function makeNewPosition(){
//
//     // Get viewport dimensions (remove the dimension of the div)
//     var h = $(window).height() - 50;
//     var w = $(window).width() - 50;
//
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
//
//     return [nh,nw];
//
// }
//
// function animateDiv(){
//     var newq = makeNewPosition();
//     var oldq = $('.moth').offset();
//     var speed = calcSpeed([oldq.top, oldq.left], newq);
//
//     $('.moth').animate({ top: newq[0], left: newq[1] }, speed, function(){
//       animateDiv();
//     });
//
// };
//
// function calcSpeed(prev, next) {
//
//     var x = Math.abs(prev[1] - next[1]);
//     var y = Math.abs(prev[0] - next[0]);
//
//     var greatest = x > y ? x : y;
//
//     var speedModifier = 0.1;
//
//     var speed = Math.ceil(greatest/speedModifier);
//
//     return speed;

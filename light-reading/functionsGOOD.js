$(document).on('mousemove', function(e){
  let bugX = 0;
  let bugY = 0;
  let bugster = document.querySelector('#crawler');
  //bugY = window.scrollY + bugster.getBoundingClientRect().top // Y
  //bugX = window.scrollX + bugster.getBoundingClientRect().left // X
  //bugTop = bugster.getBoundingClientRect().top;
  //royMad = document.querySelector('#crawler').getBoundingClientRect().top;
    $('.bug').css({
       left:  e.pageX,
       top:   e.pageY
    });
    $('.light').css({
       left:  e.pageX - 100,
       top:   e.pageY - 100
    });

    //const angle = Math.atan2(e.pageY - bugY, e.pageX - bugX);
    //bug.style.transform = `rotate(${angle}rad)`;
});

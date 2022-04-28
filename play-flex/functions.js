//
// function randomImage(){
//   var images = [
//    'screen-grass.png',
//    'win2.png',
//    'win1.png'];
//   var size = images.length;
//   var x = Math.floor(size * Math.random());
//   console.log(x);
//   var element = document.getElementsByClassName('home-intro');
//   console.log(element);
//   element[0].style["background-image"] = "url("+ images[x] + ") no-repeat;";
// }
// document.addEventListener("DOMContentLoaded", randomImage);
function randomImage(){
  var images = [
   'screen-grass.png',
   'win2.png',
   'win1.png'
   'win-death.jpeg'];
  var size = images.length;
  var x = Math.floor(size * Math.random());
  console.log(x);
  var element = document.getElementsByClassName('home-intro');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";
}

document.addEventListener("DOMContentLoaded", randomImage);

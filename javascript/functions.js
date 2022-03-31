function toggle() {
  var box= document.getElementById("box");
 box.classList.toggle ("active");
}

/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
*/
$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 15000,
	//gap in pixels between the tickers
	gap: 50,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  startVisible:true
});

// 以上这一大段等于
// $('.marquee').marquee();

$( function() {
   $( "#draggable" ).draggable();
 } );

 $( function() {
    $( ".draggable" ).draggable();
  } );

  function onMouseMove(event) {
  	path.firstSegment.point = event.point;
  	for (var i = 0; i < points - 1; i++) {
  		var segment = path.segments[i];
  		var nextSegment = segment.next;
  		var vector = segment.point - nextSegment.point;
  		vector.length = length;
  		nextSegment.point = segment.point - vector;
  	}
  	path.smooth({ type: 'continuous' });
  }

  function onMouseDown(event) {
  	path.fullySelected = true;
  	path.strokeColor = '#e08285';
  }

  function onMouseUp(event) {
  	path.fullySelected = false;
  	path.strokeColor = '#e4141b';
  }

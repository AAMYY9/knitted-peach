$(function () {
	$('.tlt').textillate({
    autoStart: true,
    loop: true,
    in: {
    	// set the effect name
      effect: 'flip',

      // set the delay factor applied to each consecutive character
      delayScale: 1,

      // set the delay between each character
      delay: 1,

      // set to true to animate all the characters at the same time
      sync: true,

      // randomize the character sequence
      // (note that shuffle doesn't make sense with sync = true)
      shuffle: false,

      // reverse the character sequence
      // (note that reverse doesn't make sense with sync = true)
      reverse: false,

      // callback that executes once the animation has finished
      callback: function () {}
    },
    out: {
       effect: 'flip',
       delayScale: 1.5,
       delay: 50,
       sync: false,
       shuffle: false,
       reverse: false,
       callback: function () {}
     },
  });
})

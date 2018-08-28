// begin the race
$('#go').click(function() {

  // function that checks if a car won the race
  function checkIfComplete() {
    if( isComplete == false ) {
      isComplete = true;
    } else {
      place = 'second';
    }
  }

  // get the width of the cars
  var carWidth = $('#car1').width();

  // calculate the width of the track
  var raceTrackWidth = $(window).width() - carWidth;

  // generate a random number between 1 and 5000
  var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
  var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );

  // set a flag variable to false by default
  var isComplete = false;

  // set a flag variable to FIRST by default
  var place = 'first';

  // Animation for car 1
  $('#car1').animate({

    // move the car width of the racetrack
    left : raceTrackWidth

  }, raceTime1, function() {

    // animation is complete

    // run a function
    checkIfComplete();

    // give text feedback in the area Results
    $('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!');

  });

  // Animation for car 2
  $('#car2').animate({

    // move the car width of the racetrack
    left : raceTrackWidth

  }, raceTime2, function() {

    // animation is complete

    // run a function
    checkIfComplete();

    // give text feedback in the area Results
    $('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!');

  });
});

// reset
$('#reset').click(function() {
  $('.car').css('left','0');
  $('.raceInfo span').text('');
});
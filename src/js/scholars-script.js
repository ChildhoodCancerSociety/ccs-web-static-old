let countDownDate = new Date("May 8, 2023 11:59:59").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countDown").innerHTML = 
    '<div class = "time-unit">' + days 
    + '<div class = "unit-name">' + 'Days' + '</div>' 
    + '</div>' + '<div>' + ':' + '</div>' + '</div>'
    
    + '<div class = "time-unit">' + hours 
    + '<div class = "unit-name">' + 'Hours' + '</div>' 
    + '</div>' + '<div>' + ':' + '</div>' + '</div>'
    
    + '<div class = "time-unit">' + minutes 
    + '<div class = "unit-name">' + 'Minutes' + '</div>' 
    + '</div>' + '<div>' + ':' + '</div>' + '</div>'
    
    + '<div class = "time-unit">' + seconds 
    + '<div class = "unit-name">' + 'Seconds' + '</div>' 
    + '</div>' + '</div>'

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);
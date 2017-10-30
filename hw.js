var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  
  if (hourNow > 18) {
    greeting = 'Good Evening!';
  } else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good Morning!';
  } else {
    greeting = 'Good Afternoon!';
  }
  document.write('<h3>' + greeting + '<h3>');


var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

svg.append("g")
   .attr("class", "x axis")
   .call(xAxis);



var today = new Date();
var hourNow = today.getHours();
var greeting;

var theOneRing = {
color:"yellow",
material:"gold",
maker:"Sauron",
};
var theOneRingOwners = {
0:"Sauron",
1:"Isildur"
};






d3.csv("co2_income.csv", function(data) {
   var svg = d3.select("body").append("svg")
    .attr("width", 700);
    
    svg.selectAll()
    var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");
    
    svg.append("g")
   .attr("class", "x axis")
   .attr("transform", "translate(0," + (h - padding) +")")
   .call(xAxis);
    var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

    svg.append("g")
   .attr("class", "y axis")
   .attr("transform", "translate(" + (padding) +",0)")
   .call(yAxis);
});

   
    console.log(svg.attr)

    console.log(typeof(svg));
console.log(theOneRing.color);
console.log(theOneRingOwners[1]);


  if (hourNow > 18) {
    greeting = 'Good Evening!';
  } else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good Morning!';
  } else {
    greeting = 'Good Afternoon!';
  }
  document.write(greeting);





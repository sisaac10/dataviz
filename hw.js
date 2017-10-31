

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
   console.log(svg.attr)

    console.log(typeof(svg));
   
   svg.selectAll("circle")
   .data(values)
   .enter()
   .append("circle")
   .attr("cy", height/2)
   .attr("r", 5)
   .attr("cx", function(d) {return width * d;});
   
    
    
});

   
   
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





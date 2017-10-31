

var theOneRing = {
color:"yellow",
material:"gold",
maker:"Sauron",
};
var theOneRingOwners = {
0:"Sauron",
1:"Isildur"
};




d3.select("p")
     .on("click", function() {
     alert("Click working!");
     });

d3.csv("co2_income.csv", function(data) {
   var svg = d3.select("body").append("svg")
   .attr("width", 700);
   
   console.log(svg.attr)

   console.log(typeof(svg));
   
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
	
   var xScale = d3.scale.linear()
   .domain([0, xmax])
   .range([padding, w - padding])
   .nice();
    
});

   
   
console.log(theOneRing.color);
console.log(theOneRingOwners[1]);







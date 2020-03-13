var svgStates = d3.select("svg #states"); // (1)

var projection = d3.geoAlbersUsa(); // (2)

var path = d3.geoPath()
    .projection(projection);  // (3)

d3.json("data/states.json", function(error, topologies) {  // (4)

  var state = topojson.feature(topologies[0], topologies[0].objects.stdin);  // (5)

  svgStates.selectAll("path")  // (6)
      .data(state.features)
      .enter()
    .append("path")
      .attr("d", path);
});
import * as d3 from "d3";

const MAX_VAL = 400;

let numbers = [13, 34, 24, 5, 8, 15, 20];


const svg = d3.select("#app")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

function posy(d, i) {
    return i * 10;
  }  

const xScale = d3.scaleLinear()
  .domain([0, MAX_VAL])
  .range([0, 483]);

d3.select("#update").on("click", function() {
  const num = Math.floor(Math.random() * 10);
  numbers = d3.range(num).map(n => Math.floor(Math.random() * MAX_VAL) );
  console.log('numbers', numbers);

  // OPTION 1: maintain xScale fixed
  // OPTION 2: 
  // const new_max = d3.max(numbers);
  // xScale.domain([0, new_max]);

  // let lines = svg.selectAll("line")
  // .data(numbers);

  // lines.exit().remove(); 

  // lines = lines
  //   .enter()
  //   .append("line")
  //   .merge(lines);

  let lines = svg.selectAll("line")
  .data(numbers)
  .join("line");

  lines
    .attr("x1", 0)
    .attr("y1", posy)
    .attr("y2", posy)
    .attr("x2", xScale)
    .attr("stroke", "black")
    .attr("stroke-width", 2);
});

// step 2: introduce scales to handle layout

// step 3: transition from lines to rects

// step 4: adjust layout (introducing gs)





  
import * as d3 from "d3";

let numbers = [13, 34, 24, 5, 8, 15, 20];

const svg = d3.select("#app")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

function posy(d, i) {
    return i * 10;
  }  

function posx(d) {
  return d * 10;
}


d3.select("#update").on("click", function() {
  const num = Math.floor(Math.random() * 10);
  numbers = d3.range(num).map(n => Math.floor(Math.random() * 400) );
  console.log('numbers', numbers);

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
    .attr("x2", posx)
    .attr("stroke", "black")
    .attr("stroke-width", 2);
});








  
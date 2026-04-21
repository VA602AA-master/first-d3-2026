import * as d3 from "d3";

const MAX_VAL = 400;

let numbers = [13, 34, 24, 5, 8, 15, 20];


const svg = d3.select("#app")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);



const xScale = d3.scaleLinear()
  .domain([0, MAX_VAL])
  .range([0, 480]);

const yScale = d3.scaleBand()
  // .domain()
  .range([0, 480])
  .paddingInner(0.3)
  .paddingOuter(0.3);

// function posy(d, i) {
//     return yScale(i);
//   } 


d3.select("#update").on("click", function() {
  const num = Math.floor(Math.random() * 80);
  numbers = d3.range(num).map(n => Math.floor(Math.random() * MAX_VAL) );
  console.log('numbers', numbers);

  yScale.domain(d3.range(num));

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

  let gs = svg.selectAll("g.bars")
    .data(numbers)
    .join("g")
    .classed('bars', true)
    .attr('transform', (d, i) => `translate(0, ${yScale(i)})`)
 

  gs.selectAll('rect')
    .data(d => [d])
    .join('rect')
    // .attr("x", 0)
    // .attr("y", (d, i) => yScale(i))
    .attr("height", yScale.bandwidth())
    .attr("width", xScale)
    .attr("stroke", "black")
    .attr("stroke-width", 2);


});

// step 4: adjust layout (introducing gs)





  
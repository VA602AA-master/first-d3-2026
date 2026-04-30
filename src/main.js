import * as d3 from "d3";

const WIDTH = 500;
const HEIGHT = 500;
const MAX_VAL = 400;
const API_URL = "http://localhost:8000";
const DEFAULT_GRAPH_NAME= "default-graph";

let numbers = [13, 34, 24, 5, 8, 15, 20];


const svgN = d3.select("#app")
  .append("svg")
  .attr("width", WIDTH)
  .attr("height", HEIGHT);

const svgE = d3.select("#app")
  .append("svg")
  .attr("width", WIDTH)
  .attr("height", HEIGHT);

const barchart = BarChart();

fetch(`${API_URL}/set-default/${DEFAULT_GRAPH_NAME}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: {
    "key": "value",
  }
}).then(res => res.json())
  .then(data => {
    console.log('data', data);
    d3.select("#update").on("click", function() {
      fetch(`${API_URL}/node-types/default`)
        .then(res => res.json())
        .then(data => {
          console.log('data Nodes', data);
          svgN.datum(
            Object.entries(
              data.node_type_counts
            )
          )
          .call(barchart);
        })
      fetch(`${API_URL}/edge-types/default`)
        .then(res => res.json())
        .then(data => {
          console.log('data Edges', data);
          svgE.datum(
            Object.entries(
              data.edge_type_counts
            )
          )
          .call(barchart);
        })
    });    
  })
  .catch(err => console.error('Error:', err));  





function BarChart(){

  const xScale = d3.scaleLinear()
    .domain([0, MAX_VAL])
    .range([0, 480]);

  const yScale = d3.scaleBand()
    // .domain()
    .range([0, 480])
    .paddingInner(0.3)
    .paddingOuter(0.3);

  function my(selection){
    console.log('selection datum', selection.datum());  

    yScale.domain(d3.range(selection.datum().length));
    xScale.domain([0, 
      d3.max(selection.datum(), d => d[1])
    ]);

    let gs = selection.selectAll("g.bars")
      .data(selection.datum())
      .join("g")
      .classed('bars', true)
      .attr('transform', (d, i) => `translate(0, ${yScale(i)})`)
  

    gs.selectAll('rect')
      .data(d => [d])
      .join('rect')
      // .attr("x", 0)
      // .attr("y", (d, i) => yScale(i))
      .attr("height", yScale.bandwidth())
      .attr("width", d => xScale(d[1]))
      .attr("stroke", "black")
      .attr("stroke-width", 2);


    gs.selectAll('text')
      .data(d => [d])
      .join('text')
      .attr("x", 5)
      .attr("y", yScale.bandwidth() / 2)
      .text(d => `${d[0]}: ${d[1]}`)
      .attr("alignment-baseline", "middle")
      .attr("fill", "white");
  }

  return my;
}

// introducing modules







  
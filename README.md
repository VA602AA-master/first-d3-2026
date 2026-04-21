# First D3 Project - Starting example

This initial example introduces the basic paradigm of `D3.js` for binding data to DOM elements and using that data to drive the visual encoding of those elements. 

This small project introduces first the `enter`, `update`, and `exit` selections. We also simplify the code by using `join` instead of separate function for `append` and `remove`. 

In a second step, we transition from lines to rects. Here we also introduce the functions `scaleLinear` and `scaleBand` to map our data values to visual properties.

Finally, we adjust the layout by introducing `g` elements, as a way to group the visual elements together.
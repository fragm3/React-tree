import React, { Component } from 'react';
import * as d3 from 'd3'
import ReactDOM from 'react-dom';
import './App.css';
import TreeTraversal from './TreeTraversal'

class D3Tree extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    this.renderTree(this.props.treeData);
  }

  shouldComponentUpdate(nextProps, nextState){
    // Delegate rendering the tree to a d3 function on prop change
    this.renderTree(nextProps.treeData);

    // Do not allow react to render the component on prop change
    return false;
  }

  renderTree = (treeData) => {
    var margin = {top: 100, bottom: 20, left: 50},
    width = 660,
    height = 500 - margin.top - margin.bottom;  
      
    var i = 0,
      duration = 750,
      root;

    // Cleans up the SVG on re-render
    d3.select(this.node).selectAll("*").remove();

    var tree = d3.layout.tree()
      .size([height, width]);

      var diagonal = d3.svg.diagonal()
      .projection(function(d) { return [d.x, d.y]; })
    

    var svg = d3.select(this.node)
      .attr("width", width)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    root = treeData[0];
      
    update(root);

    function update(source) {

      // Compute the new tree layout.
      var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);
    
      // Normalize for fixed-depth.
      nodes.forEach(function(d) { d.y = d.depth * 100; });
    
      // Declare the nodes…
      var node = svg.selectAll("g.node")
        .data(nodes, function(d) { return d.id || (d.id = ++i); });
    
      // Enter the nodes.
      var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { 
          return "translate(" + d.x + "," + d.y + ")"; });
    
      nodeEnter.append("circle")
        .attr("r", 15)
        .style("fill", "#fff")
        .style("stroke", "#929292");    
    
      nodeEnter.append("text")
        .attr("y", "middle")
        .attr("dy", "4")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.name; })
        .style("fill-opacity", 1);
    
      // Declare the links…
      var link = svg.selectAll("path.link")
        .data(links, function(d) { return d.target.id; });
    
      // Enter the links.
      link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", diagonal)
    }
    

    // Toggle children on click.
    function click(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    }
}

  visitElement = (element,animX) => {
    d3.select("#node-"+element.id)
      .transition().duration(5).delay(5*animX)
      .style("fill","red").style("stroke","red");
  }

    render() {

      return (
        <div className = "app-container">
          <svg ref={node => this.node = node}></svg>
          <TreeTraversal />
        </div>
    )
    }
  }

export default D3Tree;

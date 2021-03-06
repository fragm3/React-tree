import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3'
import '../App.css';
import TreeTraversal from './TreeTraversal'

class D3Tree extends Component{
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
      
    var i = 0, root;

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

    if(treeData)  
      root = treeData[0];
      
    update(root);

    function update(source) {

      // Compute the new tree layout.
      var nodes = tree.nodes(root),
        links = tree.links(nodes);
    
      // Normalize for fixed-depth.
      nodes.forEach(function(d) { d.y = d.depth * 100; });
    
      // Declare the nodes…
      var node = svg.append("g").attr("id","nodes").selectAll("g.node")
        .data(nodes, function(d) { return d.id || (d.id = ++i); })
    
      // Enter the nodes.
      var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("id",function(d){return "node-"+d.id})
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
        .data(links, function(d) { return d.target.id; })
        
    
      // Enter the links.
      link.enter().insert("path", "g")
        .attr("id",function(d){
          return d.source.id +"-to-"+ d.target.id;
        })
        .attr("class", "link")
        .attr("d", diagonal)
    }
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

D3Tree.propTypes = {
  treeData : PropTypes.array,
}

export default D3Tree;

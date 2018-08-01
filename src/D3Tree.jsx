import React, { Component } from 'react';
import * as d3 from 'd3'
import ReactDOM from 'react-dom';
import './App.css';

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
    var margin = {top: 100, right: 220, bottom: 20, left: 450},
    width = 960 - margin.right - margin.left,
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
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    root = treeData[0];
      
    update(root);
    
    function update(root) {
    
      // Compute the new tree layout.
      var nodes = tree.nodes(root),
        links = tree.links(nodes);
    
      // Normalize for fixed-depth.
      nodes.forEach(function(d) { d.y = d.depth *100; });
    
      // Declare and append the nodes
      var nodeWrapper = svg.append("g").attr("id","nodes").selectAll("g.node")
        .data(nodes, function(d) {return d.id || (d.id = i++); })
        .enter().append("circle")
        .attr("class", "node")
        //Root is the highest ID
        // .attr("id",function(d){return "node-"+d.id})
        .attr("id", function(d){return "node-" + d.id})
        .attr("cx",function(d){return d.x;})
        .attr("cy",function(d){return d.y;})
        .attr("r", 10);
    
      // Declare and append the links
      var linkWrapper = svg.append("g").attr("id","links").selectAll("path.link")
        .data(links, function(d) { return d.target.id; })
        .enter()
        .append("line", "g")
        .attr("class", "link")
        .attr("id",function(d){
          return d.source.id +"-to-"+ d.target.id;
        })
        .attr('x1', function(d){return d.source.x;})
        .attr('x2',function(d){return d.target.x;})
        .attr('y1',function(d){return d.source.y;})
        .attr('y2',function(d){return d.target.y;});
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
  visitElement = (element) => {
  d3.select(".node"+element.id)
  .transition().duration(50).delay(50)
  .style("fill","red").style("stroke","red");
}

  dft = () => {
    var stack=[];
    var animX=0;
    stack.push(root);
    while(stack.length!==0){
      var element = stack.pop();
      this.visitElement(element);
      animX=animX+1;
      if(element.children!==undefined){
        for(var i=0; i<element.children.length; i++){
          console.log(element.children[i], "Element Children")
          stack.push(element.children[element.children.length-i-1]);
        }
      }
    }
  }
  
  bft = () => {
    var queue=[];
    var animX=0;
    queue.push(root);
    console.log(root, "root")
    while(queue.length!==0){
      var element = queue.shift();
      this.visitElement(element);
      animX= animX+1;
      if(element.children!==undefined){
        for(var i=0; i<element.children.length; i++){
          console.log(element.children[i], "Element children");
          queue.push(element.children[i]);
        }
      }
    }
  }

  resetTraversal = (root) => {
    d3.selectAll(".node")
      .transition().duration(5)
      .style("fill","#fff")
      .style("stroke","steelblue");
  }

  console = () => {
    console.log("TEST")
  }
    // Render a blank svg node
    render() {
      return (
        <React.Fragment>
          <div>
            <button id="dft" onClick={this.dft}>Depth First</button>
            <button id="bft" onClick={this.bft}>Breadth First</button>
            <button id="reset" onClick={this.resetTraversal}>Reset</button>
          </div>
          <svg ref={node => this.node = node}></svg>
        </React.Fragment>
    )
    }
  }

export default D3Tree;
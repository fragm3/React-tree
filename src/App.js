import React, { Component } from 'react';
import D3Tree from './D3Tree';
import './App.css';
import * as d3 from 'd3'

const treeData = [
  {
    "name": "34",
    "parent": "null",
    "children": [
      {
        "name": "23",
        "parent": "34",
        "children": [
          {
            "name": "12",
            "parent": "23",
          },
          {
            "name": "04",
            "parent": "23",
            "children": [
            	{
              	"name": "16",
                "parent": "04",
              },
              {
              	"name": "09",
                "parent": "04",
              }
            ]
          }
        ]
      },
      {
        "name": "92",
				"parent": "34",
				"children": [
					{
						"name": "16",
						"parent": "04",
					},
					{
						"name": "09",
						"parent": "04",
					}
				]
      }
    ]
  }
];

//var treeData = [{children:[{children:[{},{},{}]},{children:[{children:[{}]}]},{},{children:[{},{children:[{},{}]}]}]}];


class App extends Component{
	constructor(){
		super();
	}
	
	render() {

		return (
			<div>
					<D3Tree treeData={treeData} />
			</div>
		);
		
	}

};

export default App;
import React, { Component } from 'react';
import D3Tree from './D3Tree';
import './App.css';
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
      }
    ]
  }
];

class App extends Component{

	render() {

		return (
			<div>
				{/* <div>
					<button id="dft" onClick={this.dft}>Depth First</button>
					<button id="bft" onClick={this.bft}>Breadth First</button>
					<button id="reset" onClick={this.resetTraversal}>Reset</button>
      	</div> */}
					<D3Tree treeData={treeData} />
			</div>
		);
		
	}

};

export default App;
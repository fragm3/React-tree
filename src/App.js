import React, { Component } from 'react';
import D3Tree from './components/D3Tree';
import './App.css';
import * as d3 from 'd3';
import treeData from './utils/tree-data'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <D3Tree treeData={treeData} />
      </div>
    );
  }
}

export default App;

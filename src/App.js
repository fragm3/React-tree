import React, { Component } from 'react';
import D3Tree from './components/D3Tree';
import './App.css';
import treeData from './utils/tree-data'

class App extends Component {
  render() {
    return (
      <div>
        <D3Tree treeData={treeData} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import { Transition } from 'react-move';

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root;
        this.list = [];
    }

    // returns root of the tree
    getRootNode = () => {
        return this.root;
    }

    inorder = (node) => {
        if(node !== null) {
            this.inorder(node.left);
            this.list.push(node.data);
            this.inorder(node.right);
        }
    }

    preorder = (node) => {
        if(node != null) {
            this.list.push(node.data);
            this.preorder(node.left);
            
            this.preorder(node.right);
        }
    }

    postorder = (node) => {
        if(node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            this.list.push(node.data);
        }
    }

    resetList = () => {
        this.list = [];
    }

    getList = () => {
        return this.list;
    }

    bft = (node) => {
        if(node != null) {
            var arr = [];
            arr.push(node);
            while(arr.length != 0){
                var element = arr.shift();
                this.list.push(element.data);
                console.log(element.data);
                if(element.left != null)
                    arr.push(element.left);
                if(element.right != null)
                    arr.push(element.right);    
            }
        }
    }
}

var node = new Node("34");
node.left = new Node("23");
node.left.left = new Node("12");
node.left.right = new Node("04");
node.left.right.left = new Node("16");
node.left.right.right = new Node("09");
node.right = new Node("92");
var BT = new BinaryTree(node);

var root = BT.getRootNode();


export default class TreeTraversal extends Component{
	constructor(){
        super();
        this.state = {
            list: [],
            isPlaying: false
        };
        
    }

    array = [];

    // prints 34 23 92 12 04 16 09
    bft = ()  => {
        BT.resetList();
        this.setState({list: []})
        BT.bft(root);
        var list = BT.getList();
        this.setState({list: list})
    }
    
    // prints 34 23 12 04 16 09 92
    preOrder = () => {
        BT.resetList();
        this.setState({list: []})
        BT.preorder(root);
        var list = BT.getList();
        this.setState({list: list})
    }
    
    // prints 12 23 16 04 09 34 92
    inOrder = () => {
        BT.resetList();
        this.setState({list: []})
        BT.inorder(root);
        var list = BT.getList();
        this.setState({list: list})
    }
    
    // prints 12 16 09 04 23 92 34
    postOrder = () => {
        BT.resetList();
        this.setState({list: []})
        BT.postorder(root);
        var list = BT.getList();
        this.setState({list: list})
    }

    reset = () => {
        this.setState({isPlaying: false, list: []});
    }
	
	render() {
        let {list} = this.state;
        let renderElement = null;
        if(this.state.list){
        renderElement = (
            <div>
                <button onClick={this.reset}>Reset</button>
                <Transition
                   data={list}
                   getKey={d => d}
                   update={d => ({
                   translate: 0,
                   opacity: 1
                   })}
                   enter={d => ({
                       translate: 1,
                       opacity: 0
                   })}
                   leave={d => ({
                       translate: -1,
                       opacity: 0
                   })}
                   stagger={200}
                >
                {dataArray => (
                    <div className = "traverse-number-container">
                    {dataArray.map(data => (
                    <li
                      className="traverse-number"
                      key={data.key}
                      style={{opacity: data.state.opacity}}
                    >
                      {data.key}
                    </li>
                    ))
                    }
                    </div>
                )}
            </Transition>
        </div>
        )
    }

		return (
            <div className = "tree-traversal">
                <Menu
                  bft={this.bft} 
                  preorder={this.preOrder}
                  inorder={this.inOrder}
                  postOrder={this.postOrder}
                />
                {renderElement}
            </div>    
        )
	}
};
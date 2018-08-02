import React, { Component } from 'react';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
            menuText: 'Select traversal'
        };
    }

    showMenu = (event) => {
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = () => {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        }); 
    }

    selectBFT = () => {
        this.props.bft();
        this.setState({menuText: "Breadth First Traversal"});
    }

    selectinOrderT = () => {
        this.props.inorder();
        this.setState({menuText: "Inorder Traversal"});
    }

    selectpreOderT = () => {
        this.props.bft();
        this.setState({menuText: "Preorder Traversal"});
    }

    selectpostOrderT = () => {
        this.props.postOrder();
        this.setState({menuText: "Postorder Traversal"});
    }

    render() {
        return (
            <div className="menu-container">
            <div>
                <button className="menu-button" onClick={this.showMenu}>
                    {this.state.menuText}
                    <span className="caret" />
                </button>
                {this.state.showMenu ? (
                    <div className="menu"
                        ref={(element) => {
                            this.dropdownMenu = element;
                        }}
                    >
                    <ul className="dropdown-menu">
                        <li onClick={this.selectBFT}>Breadth First Traversal</li>
                        <li onClick={this.selectpreOderT}>Preorder Traversal</li>
                        <li onClick={this.selectinOrderT}>Inorder Traversal</li>
                        <li onClick={this.selectpostOrderT }>PostOrder Traversal</li>
                    </ul>
                    </div>
                    )
                    : (
                        null
                    )
                }
            </div>
            </div>
        );
    }
}
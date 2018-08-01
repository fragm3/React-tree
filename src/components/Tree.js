export class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree {
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
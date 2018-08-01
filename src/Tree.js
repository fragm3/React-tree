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
    }

    // returns root of the tree
    getRootNode = () => {
        return this.root;
    }

    inorder = (node) => {
        var arr = [];
        if(node !== null) {
            this.inorder(node.left);
            arr.push(node.data);
            //console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder = (node) => {
        var arr = [];
        if(node != null) {
        //console.log(node.data);
        arr.push(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
        }
    }

    postorder = (node) => {
        var arr = [];
        if(node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            arr.push(node.data);
            //console.log(node.data);
        }
        console.log(arr)
    }

    bft = (node) => {
        if(node != null) {
            var arr = [];
            arr.push(node);
            while(arr.length != 0){
                var element = arr.shift();
                console.log(element.data);
                if(element.left != null)
                    arr.push(element.left);
                if(element.right != null)
                    arr.push(element.right);    
            }
        }
    }
}

class Node {

	constructor(value) {
	this.value = value;
	this.left = null;
	this.right = null;
	}

}

function insert(root, value) {
	if(root === null) {
		return new Node(value);
	}
	if(root.value > value){
		root.left = insert(root.left, value);
	} else if(root.value < value) {
		root.right = insert(root.right, value);
	}
	return root;
}

function inorder(root) {
	if(root === null) {
		return;
	}
	if(root !== null) {
		inorder(root.left);
		console.log(root.value);
		inorder(root.right);
	}
}

function preorder(root) {
	if(root === null) {
		return;
	}
	if(root !== null) {
		console.log(root.value);
		preorder(root.left);
		preorder(root.right);
	}
}

function postorder(root) {
	if(root === null) {
		return;
	}
	postorder(root.left);
	postorder(root.right);
	console.log(root.value);
}
let root = new Node(10);
insert(root, 6);
insert(root, 12);
insert(root, 4);
insert(root, 17);
insert(root, 7);
insert(root, 11);
module.exports = {inorder, insert,  preorder, postorder, Node};
//inorder(root);
//console.log("next");
//preorder(root);
//console.log("next");
postorder(root);
//console.log(root.left.value);

class TreeNode {
	constructor(data = null) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
	
	addChildren(left, right) {
		this.left = left;
		this.right = right;
	}
}

class Tree {
	constructor(root) {
		this.root = root;
	}
	
	traverseRootLeafPath(node, path = [], pathLen = 0) {
		if(node === null || node === undefined) {
			return;
		}
		path[pathLen] = node.data;
		pathLen++;

		if(node.left === null && node.right === null) {
			this.printRootLeafPath(path, pathLen);
		} else {
			this.traverseRootLeafPath(node.left, path, pathLen);
			this.traverseRootLeafPath(node.right, path, pathLen);
		}
	}
	
	printRootLeafPath(path, pathLen) {
		for(let i = 0; i < path.length; i++) {
			console.log(path[i]);
		}
		console.log('');
	}
}

let root = new TreeNode('8');
let tree = new Tree(root);
let node1 = new TreeNode('3');
let node2 = new TreeNode('10');
root.addChildren(node1, node2);

let node3 = new TreeNode('1');
let node4 = new TreeNode('6');
node1.addChildren(node3, node4);

let node5 = new TreeNode('14');
node2.addChildren(null, node5);

let node6 = new TreeNode('4');
let node7 = new TreeNode('7');
node4.addChildren(node6, node7);

let node8 = new TreeNode('13');
node5.addChildren(node8, null);

const path = tree.traverseRootLeafPath(root);
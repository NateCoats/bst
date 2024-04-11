const fs = require('fs');
const bsr = require('/Users/nate/code/bsr.js');

function printData(err, data) {
	if(err){
		throw err;
	}
	const lines = data.split('\n');
	//console.log(lines);
	let root = new bsr.Node(24);
	for (const line of lines) {
		let value = parseInt(line.trim());
		bsr.insert(root, value);
		//console.log(line);
	}
	console.log("inorder \n")
	bsr.inorder(root);
	console.log("preorder \n")
	bsr.preorder(root);
	console.log("postorder \n")
	bsr.postorder(root);
}
fs.readFile('/Users/nate/class/data.txt', 'utf8' , printData)

//exit on uncaught errors
process.on('uncaughtException', (err) => {
	console.error(`There was an uncaught error: ${err}`);
	process.exit(1);
})
//console.log(lines);
	//root = insert(root, values);
//console.log("Inorder traversal:");
//inorder(root);

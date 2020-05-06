var canvas;
var grid;
var boxSize = 150;


class Grid {
	constructor (num1, num2) {
		var box1 = new Box(num1, (window.innerWidth-2*boxSize)/2, (window.innerHeight-2*boxSize)/2);
		var box2 = new Box(num2, (window.innerWidth)/2, (window.innerHeight-2*boxSize)/2);
		this.grid = [box1, box2];
	}

	getBox1() {
		return this.grid[0];
	}

	getBox2() {
		return this.grid[1];
	}
}

class Box {
	constructor(index, x, y) {
		this.index = index;
		this.x = x;
		this.y = y;
	}

	getIndex() {
		return this.index;
	}

	setIndex(index) {
		this.index = index;
	}

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}
}


let input1, input2, button, instruction;

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);

	input1 = createInput();
	input1.position(20, 65);

	input2 = createInput();
	input2.position(20, 150);

	button = createButton('submit');
	button.position(20, input2.y+input2.height);
	button.mousePressed(begin);

	instruction = createElement('h2', 'input two numbers');
	instruction.position(20, 5);
	noLoop();
}

function begin() {
	const isnum1 = /^\d+$/.test(input1.value());
	const isnum2 = /^\d+$/.test(input2.value());
	if (isnum1 && isnum2) {
		start();
	}
	else {
		input1.value('');
		input2.value('');
	}
}


function start() {
	const num1 = input1.value().trim();
	const num2 = input2.value().trim();
	input1.remove();
	input2.remove();
	button.remove();
	instruction.remove();
	grid = new Grid(num1, num2);
	redraw();

}

function draw() {
	// refresh background to white
	background(255);

	// creates grid boxes
	fill(255);
	rect(grid.getBox1().getX(), grid.getBox1().getY(), boxSize, boxSize);
	rect(grid.getBox2().getX(), grid.getBox2().getY(), boxSize, boxSize);

	// creates text for numbers
	fill(0);
	const num1 = grid.getBox1().getIndex();
	const num2 = grid.getBox2().getIndex();
	const num1Length = num1.toString().length;
	const num2Length = num2.toString().length;


	var num1TextSize = boxSize / (num1Length * (5/4));
	var num2TextSize = boxSize / (num2Length * (5/4))
	if (num1TextSize > 60) {
		num1TextSize = 60;
	}
	if (num2TextSize > 60) {
		num2TextSize = 60;
	}

	textSize(num1TextSize);
	text(num1, (window.innerWidth-1.5*boxSize)/2, (window.innerHeight-boxSize/1.5)/2);

	textSize(num2TextSize);
	text(num2, (window.innerWidth+boxSize/2)/2, (window.innerHeight-boxSize/1.5)/2);


}

function nextEuclid() {
	if (grid.getBox2().getIndex() != 0) {
		let box1Index = grid.getBox2().getIndex();
		let box2Index = grid.getBox1().getIndex() % grid.getBox2().getIndex();
		grid.getBox1().setIndex(box1Index);
		grid.getBox2().setIndex(box2Index); 
	}
}

function mouseClicked() {
	nextEuclid();
	redraw();
}


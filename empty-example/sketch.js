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


function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);
	grid = new Grid(16, 10);
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
	textSize(60);
	text(grid.getBox1().getIndex(), (window.innerWidth-1.5*boxSize)/2, (window.innerHeight-boxSize/1.5)/2);
	text(grid.getBox2().getIndex(), (window.innerWidth+boxSize/2)/2, (window.innerHeight-boxSize/1.5)/2);
}

function nextEuclid() {
	if (grid.getBox2().getIndex() != 0) {
		let box1Index = grid.getBox2().getIndex();
		let box2Index = grid.getBox1().getIndex() % grid.getBox2().getIndex();
		grid.getBox1().setIndex(box1Index);
		grid.getBox2().setIndex(box2Index); 
	}
}

function mousePressed() {
	nextEuclid();
}


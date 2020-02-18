var canvas;
var grid;
var boxSize = 150;


class Grid {
	constructor (num1, num2) {
		var box1 = new Box(num1, (window.innerWidth-2*boxSize)/2 - boxSize/3, (window.innerHeight-2*boxSize)/2);
		var box2 = new Box(num2, (window.innerWidth)/2 + boxSize/3, (window.innerHeight-2*boxSize)/2);
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
		fill(255);
		rect(this.x, this.y, boxSize, boxSize);
	}

	getIndex() {
		return this.index;
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
}

function draw() {
	background(255);
	grid = new Grid();
}

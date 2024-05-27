
// Exercise 

// Mosh version

function Stopwatch() {
	let startTime, endTime, running, duration = 0;

	Object.defineProperty(this, 'startTime', {
    get: function() { return startTime; },
    set: function(value) { startTime = value; }
	});

	Object.defineProperty(this, 'endTime', {
    get: function() { return endTime; },
    set: function(value) { endTime = value; }
	});

	Object.defineProperty(this, 'running', {
    get: function() { return running; },
    set: function(value) { running = value; }
	});

	Object.defineProperty(this, 'duration', {
    get: function() { return duration; },
    set: function(value) { duration = value; }
	});

}

Stopwatch.prototype.start = function() {
	if (this.running) throw new Error('Stopwatch has already started')
		this.running = true;
		this.startTime = new Date()
	};

Stopwatch.prototype.stop = function() {
	if (!this.running) throw new Error('Stopwatch is not started')
		this.endTime = new Date()
		const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
		this.duration += seconds;
	}; 

Stopwatch.prototype.reset = function() {
		this.startTime = null;
		this.endTime = null;
		this.running = false;
		this.duration = 0;
	};


const sw = new Stopwatch()


// Charles version

// function Stopwatch() {
// 	let start = 'off';
// 	let myInterval = {};
// 	let duration = 0;

// 	function myTimer() {
//   		let delta = Date.now() - start;
//   		duration = `${Math.floor(delta / 1000)}:${delta % 1000}`;
//   	};	
	
// 	this.start = function() {
// 		if (start !== 'off') throw new Error('Stopwatch has already started')
// 		start = Date.now()
// 		myInterval = setInterval(myTimer)
// 	};

// 	this.stop = function() {
// 		if (start === 'off') throw new Error('Stopwatch is not started')
// 		clearInterval(myInterval);
// 	}; 

// 	this.reset = function() {
// 		start = 'off';
// 		myInterval = {};
// 		duration = 0;
// 	}

// 	Object.defineProperty(this, 'duration', {
//     get: function() { return duration; },
//     set: function(value) { duration = value; }
// 	});

// }



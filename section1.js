
// Exercise 

// Mosh version

function Stopwatch() {
	let startTime, endTime, running, duration = 0;
	
	this.start = function() {
		if (running) throw new Error('Stopwatch has already started')
		running = true;
		startTime = new Date();
	};

	this.stop = function() {
		if (!running) throw new Error('Stopwatch is not started')
		endTime = new Date()
		const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
		duration += seconds;
	}; 

	this.reset = function() {
		startTime = null;
		endTime = null;
		running = false;
		duration = 0;
	}

	Object.defineProperty(this, 'duration', {
    get: function() { return duration; },
    set: function(value) { duration = value; }
	});

}

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



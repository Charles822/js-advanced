function HtmlElement() {
	this.click = function() {
		console.log('Clicked')
	}

}

HtmlElement.prototype.focus = function() {
	console.log('focused')
}

HtmlElement.prototype.render = function() {}


function HtmlSelectElement(items = []) {
	this.items = items;
	
	this.addItem = function(item) { 
		this.items.push(item); 
	};
	
	this.removeItem = function(item) {
		this.items.splice(this.items.indexOf(item), 1);
		}

}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlSelectElement.prototype.render = function() {
    // Call the base implementation 
    HtmlElement.prototype.render.call(this);

    // Customizing the method here:
    let options = "";
	for (element of this.items) {
		if (this.items.indexOf(element) === -1)
			options += `	<option>${element}<option>`
		else
			options += `	<option>${element}<option>\n`
	}

	return `<select> 
${options}<select>`
}


function HtmlImageElement(src) {
	this.src = src;
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

HtmlImageElement.prototype.render = function() {
    // Call the base implementation 
    HtmlElement.prototype.render.call(this);

    // Customizing the method here:
    return `<img src="${this.src}" />`
}

const e = new HtmlElement();

const elements = [
	new HtmlSelectElement([1, 2, 3]),
	new HtmlImageElement("htpp://labelle")
];

for (let element of elements)
	console.log(element.render());


// Instructions

// Implement a render method to HtmlSelect
// the method render a select html element with one option for each element of the array we have taken as an input
// Create an HtmlImg element that inherits from HtmlElem
// can optionnally pass a src link
// It has its own render method 
// that renders and img element in html
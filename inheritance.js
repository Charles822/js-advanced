// 2 objects : htmElement and htmlSelectElement (representing a dropdown list)
// there is prototypical inheritance between the 2
// htmlElement = parent 
//htmlSelect = child
// htmlElement: there is one method = click
// in its prototype, there is another method = focus
// just need a console.log statement for both methods = clicked / focused

// HtmlSelect
// proto = HtmlElem
// own methods = addItem. removeItems 
// property: item (an array that we can pass in the constructor, [] empty by default)
// need to manually set the proto for HtmSelect as an instance of HtmlElement and not to the prototype of HtmlElem. 
// If so, we won't be able to access the click method


function HtmlElement() {
	this.click = function() {
		console.log('Clicked')
	}
}

HtmlElement.prototype.focus = function() {
	console.log('focused')
}


function HtmlSelectElement(items = []) {
	this.items = items;
	
	this.addItem = function(item) { 
		this.items.push(item); 
	};
	
	this.removeItem = function(item) {
		for (let i = 0; i < items.length; i++) {
		    if (items[i] === item)
		    	items.splice(i, 1);
		}
	}

}


HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const e = new HtmlElement()

const s = new HtmlSelectElement()
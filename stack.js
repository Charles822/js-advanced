// create a stack class
// count property his own property
// under prototype we have
// peek method: return item on top / cannot peek empty stack
// pop method: remove the last item inserted in the stack and return its value / cannot call on empty stack
// push method: insert an item in the stack
// seems like there is a private property to store the items in the stack
// stack.count returns the number of items


const _items = new WeakMap();


class Stack {
    constructor() {
        _items.set(this, []); 
    }

    // These methods will be added to the prototype. 

    push(obj) {
    	_items.get(this).push(obj)

    }

    peek() {
    	const items = _items.get(this);
    	if (items.length === 0) throw new Error('Stack is empty');
    	return items[items.length - 1];
    }
    
    pop() {
    	const items = _items.get(this);
    	if (items.length === 0) 
    		throw new Error('Stack is empty');
    	return items.pop();
    }

    get count() {
    	return _items.get(this).length;
    }

}



// const _stack = Symbol();


// class Stack {
//     constructor() {
//         this.count = 0; 
//         this[_stack] = []; 
//     }

//     // These methods will be added to the prototype. 

//     push(value) {
//     	this[_stack].push(value);
//     	this.count += 1;

//     }

//     peek() {
// 		const stack = this[_stack];
//     	if (stack.length === 0) throw new Error('Stack is empty');
//     	return stack[stack.length - 1];
//     }
    
//     pop() {
// 		const stack = this[_stack];
//     	if (stack.length === 0) throw new Error('Stack is empty');
//     	this.count -= 1;
// 		return stack.pop();
//     }

// }


const s = new Stack()
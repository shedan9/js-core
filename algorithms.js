/**
 * 链表（linked list）
 */
class LinkedListItem {
  constructor(value, pointer) {
    this.value = value;
    this.pointer = pointer;
  }

  setPointer(pointer) {
    this.pointer = pointer;
  }
}

const blue = new LinkedListItem('blue', null);
const yellow = new LinkedListItem('yellow', null);
const red = new LinkedListItem('red', null);

blue.setPointer(yellow);
yellow.setPointer(red);

/**
 * 栈（stack）
 */
class Stack {
  constructor() {
    this._list = [];
  }

  get list() {
    return this._list;
  }

  push(value) {
    this._list.push(value);
  }

  pop() {
    return this._list.pop();
  }
}

const colorStack = new Stack();
colorStack.push('blue');
colorStack.push('green');
colorStack.push('red');

console.log(colorStack.pop());

/**
 * 队列（queue）
 */
class Queue {
  constructor() {
    this._list = [];
  }

  get list() {
    return this._list;
  }

  inQ(value) {
    this._list.push(value);
  }

  outQ() {
    return this._list.shift();
  }
}

const colorQueue = new Queue();
colorQueue.inQ('blue');
colorQueue.inQ('green');
colorQueue.inQ('red');

console.log(colorQueue.outQ());

/**
 * 堆（heap）
 */
class Heap {
  constructor(top) {
    this.top = top;
  }


}


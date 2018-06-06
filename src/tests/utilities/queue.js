class Queue {
  constructor() {
    this.tail = null;
    this.head = null;
  }

  enqueue(item) {
    if (this.tail) {
      this.tail.next = item;
      this.tail = item;
    } else {
      this.tail = item;
      this.head = item;
    }
  }

  dequeue() {
    if (!this.head) {
      throw new Error('Invalid operation');
    }

    const item = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return item;
  }

  peek() {
    return this.head;
  }

  isEmpty() {
    return !this.head;
  }
}

module.exports = Queue;

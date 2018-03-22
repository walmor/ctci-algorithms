const deleteNode = require('../../algorithms/linked-lists/03-delete-middle-node');
const llh = require('../utilities/linked-list-helpers');
const expect = require('chai').expect;

describe('03. Delete a node in the middle of a singly linked list', () => {
  const tests = [
    tc('abcd', 0, 'bcd'),
    tc('abcd', 1, 'acd'),
    tc('abcd', 2, 'abd'),
    tc('linked-list', 6, 'linkedlist'),
    tc('mr peter', 2, 'mrpeter')
  ];

  tests.forEach(tc => {
    it(tc.description, () => {
      deleteNode(tc.input.nodeToDelete);
      expect(tc.input.linkedList).to.eql(tc.expectedOutput);
    });
  });
});

function tc(input, nodeIndex, expectedOutput) {
  return {
    input: createTestCaseInput(input, nodeIndex),
    expectedOutput: llh.singlyLinkedList(expectedOutput),
    description: `input: (${input}, ${nodeIndex}); expected output: ${expectedOutput}`
  };
}

function createTestCaseInput(input, nodeIndex) {
  const sll = llh.singlyLinkedList(input);

  let node = sll.head;

  for (let i = 0; i < nodeIndex; i++) {
    node = node.next;
  }

  sll.length--;

  return { linkedList: sll, nodeToDelete: node };
}

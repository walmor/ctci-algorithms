const yallist = require('yallist');

function sumLinkedLists(listOne, listTwo) {
  let overflow = 0;
  const sumList = yallist.create();

  let listOneNode = listOne.head;
  let listTwoNode = listTwo.head;

  while (listOneNode || listTwoNode) {
    let sum = 0;

    if (listOneNode) {
      sum += listOneNode.value;
      listOneNode = listOneNode.next;
    }

    if (listTwoNode) {
      sum += listTwoNode.value;
      listTwoNode = listTwoNode.next;
    }

    sum += overflow;
    const value = sum % 10;
    overflow = parseInt(sum / 10);

    sumList.push(value);
  }

  if (overflow) {
    sumList.push(overflow);
  }

  return sumList;
}

module.exports = sumLinkedLists;

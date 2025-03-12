const sum = (a) => (b) => (c) => {
  return a + b + c;
};

const addFive = sum(5);
const addTwoOntoFive = addFive(2);

console.log(addTwoOntoFive(3));

// function timerClosure() {
//   let count = 0;

//   function addCount() {
//     count += 1;
//   }

//   function minusCount() {
//     count -= 1;
//   }

//   function print() {
//     console.log(count);
//   }

//   return {
//     increment() {
//       addCount();
//     },
//     decrement() {
//       minusCount;
//     },
//     value() {
//       print();
//     },
//   };
// }

// const Timer = timerClosure();
// Timer.increment();
// Timer.value();

// function timerClosure() {
//   let count = 0;

//   function addCount() {
//     count += 1;
//   }

//   function print() {
//     console.log(count);
//   }

//   function decrement() {
//     count -= 1;
//   }
//   return {
//     increment() {
//       addCount();
//     },
//     decrement() {
//       decrement();
//     },
//     value() {
//       print();
//     },
//   };
// }

// let timer = timerClosure();
// timer.increment();

// timer.value();

// const increment = (count) => {
//   return count += 1;
// };

// const decrement = (count) => {};

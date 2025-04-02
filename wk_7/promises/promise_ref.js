// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise one complete!");
//   }, 2000);
// });

// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise two complete!");
//   }, 1000);
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise three complete!");
//   }, 3000);
// });

// promiseOne.then((data) => console.log(data));
// promiseTwo.then((data) => console.log(data));
// promiseThree.then((data) => console.log(data));

// Imagine you are fetching job posts information

// const promiseRandom = new Promise((resolve, reject) => {
//   let resolutionTime = Math.random() * 2;
//   setTimeout(() => {
//     resolve("Resolved in " + resolutionTime + "!");
//   }, resolutionTime);
// });

// promiseRandom.then((data) => console.log(data));

// Return
// let allPromises = Promise.all([promiseOne, promiseTwo, promiseThree]);
// allPromises.then((data) => data.map((promiseRes) => console.log(promiseRes)));

// Waits for all promises to resolve (reject or accept)
// Promise.allSettled();

// const fetchOne = () => {
//   return promiseOne.then((data) => console.log(data));
// };

// const fetchTwo = () => {
//   return promiseTwo.then((data) => console.log(data));
// };

// const fetchThree = () => {
//   return promiseThree.then((data) => console.log(data));
// };

// const sequential = async () => {
//   await fetchOne();
//   await fetchTwo();
//   await fetchThree();
// };

// sequential();

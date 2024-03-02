// function showGallery(successFetch, errorFetch) {
//     const responts = true;
//     console.log(responts, "запити за фотографіями");
//     if(responts) {
//         successFetch()
//     } else {
//         errorFetch()
//     };
// };

// showGallery(successFetch, errorFetch);

// function successFetch() {
//     console.log("ми отримали фотографії");
// };


// function errorFetch() {
//     console.log("ми не отримали фотографії");
// };


// function showGallery() {

//     const promise = new Promise((resolve, reject) => {
//         const response = true;
//         console.log(response, "запити за фотографіями");
//         if (response) {
//             resolve("Запит успішний");
//         } else {
//             reject("Запит не успішний");
//         };
//     });
//     return promise;
// };

// // showGallery().then((response) => {
// //     console.log(response);
// // }).catch((error) => {
// //     console.log(error)
// // });

// showGallery()
// .then((response) => {
//     successFetch()
// })
// .catch((error) => {
//     console.log(error)
// });

// function successFetch() {
//     console.log("ми отримали фотографії");
// };



// 9 - setTimeout vs Promise
// console.log('start');

// setTimeout(() => {
// console.log('setTimeout');
// });

// Promise.resolve().then(() => {
// console.log('resolve');
// });

// console.log('end');



// 10 - all
// Promise.all([
// new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
// new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
// new Promise(resolve => setTimeout(() => resolve(3), 1000)), // 3
// ]).then(alert);



// Promise.all([
// new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
// new Promise((resolve, reject) =>
// setTimeout(() => reject(new Error('Error!')), 2000)
// ),
// new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).catch(alert);


// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error('Error!')), 2000)
//     ),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
//     ]).then(alert);





// Microtasks are mixed with macrotasks
// const promise = new Promise((resolve, reject) => {
// console.log(1);
// setTimeout(() => {
// console.log('timerStart');
// resolve('success');
// console.log('timerEnd');
// }, 0);
// console.log(2);
// });

// promise.then(res => {
// console.log(res);
// });

// console.log(4);



// const timer1 = setTimeout(() => {
//     console.log('timer1');

//     const promise1 = Promise.resolve().then(() => {
//         console.log('promise1');
//     });
// }, 0);

// const timer2 = setTimeout(() => {
//     console.log('timer2');
// }, 0);

// getRandomNumber()
// .then((num) => {
// console.log(num + 10);
// })
// .catch((e) => console.log(e))
// .finally(() => {
// console.log("promise is all");
// });
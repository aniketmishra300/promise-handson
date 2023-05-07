
// function add(a,b){
//     console.log(a+b);
// }

// function showresult(){
//     console.log(': is the total sum  ');
// }
// showresult(add(5,7));




// function print(num){
//         for(let i = 1 ;i <= num ; i++)
//         {
//             setTimeout(() => {
//                console.log(i); 
//             }, i*(i+1)/2 * 1000);
//         }
//     }
//     print(7)

// ---> Async Await Example

// function Dis(nums, timeout){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(nums);
//             res("Promise Resolve...!!")
//         }, timeout);
//     })
// }
// Dis(7 , 2000)


// async function Call(){
//     await Dis("A", 2000);
//      Dis("E", 1000);
//      Dis("I", 4000);
//      Dis("O", 3000);
//      Dis("U", 5000);
// }

// Call();

// let c= 10;
// let abc = new Promise((res , rej) => {

//     if(c === 10 )
//     {
//         res('promise resolved.....!')
//     }
//     else{
//         rej('failed..!')
//     }
// }
// )
// abc.then((data)=>console.log(data)).catch((data)=> console.log(data));

/* callback hell*/

// function abc(){
//     console.log("abc function");
//     function bcd(abc){
//         console.log("bcd function");
//         function def(){
//         console.log("def function");
//         }def()
//     }bcd()
// }abc()


// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("God is almighty !!");
//     });
//     await myPromise;
//   }
//   myDisplay();


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// function num() {
//     console.log("hiii");
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('🤡');
//       }, 2000);
//     });
//   }
  
//   async function msg() {
//     const msg = await num();
//     console.log('Message:', msg);
//   }
  
//   msg(); // Message: 🤡  after 2 seconds
// callback--> callback hell, promisese, async/awai


function yayOrNay() {
    return new Promise((resolve, reject) => {
      const val = Math.round(Math.random() * 1); // 0 or 1, at random
      val ? resolve('Lucky!!') : reject('Nope 😠');
    });
  }
  
  async function msg() {
    try {
      const msg = await yayOrNay();
      console.log(msg);
    } catch(err) {
      console.log(err);
    }
  }
  
  msg(); // Lucky!!
  msg(); // Lucky!!
  msg(); // Lucky!!
  msg(); // Nope 😠
  msg(); // Lucky!!
  msg(); // Nope 😠

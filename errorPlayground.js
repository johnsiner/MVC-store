// const sum = (a, b) => {
//    if (a && b) {
//       return a + b;
//    }
//    throw new Error('Invalid argument');
// };

// try {
//    console.log(sum(1));
// } catch (error) {
//    console.log('An errror occured');
//    // console.log(error);
// }

async function getData() {
   return await Promise.resolve('Hello!');
}

const data = getData();
console.log(data);

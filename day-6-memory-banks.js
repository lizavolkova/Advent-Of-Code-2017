

const getSumOfArray = (array) => {
  return array.reduce((a,b) => {
    return a + b;
  }, 0)
}

const splitInt = (number, parts) => {
  const array = [];
  let i = 0;
  let maxNumber = number;
  while (i <= parts) {

    const numberToAdd = Math.ceil(number/parts);
    maxNumber -= numberToAdd;

    array[i] = numberToAdd
    //
    // console.log(getSumOfArray(array), number)
    // if (getSumOfArray(array) < number) {
    //   console.log('here')
    //   array[i] = Math.ceil(number/parts)
    // } else {
    //   console.log('here')
    //   array[i] = Math.floor(number/parts)
    // }

    // if (number % parts === 0) {
    //   array[i] = Math.floor(number/parts)
    // } else {
    //   array[i] = Math.floor(number/parts)
    // }
    i++;
  }

  return array
  // const array = []
  // for (let i = 0; i <= p; i++) {
  //   array[i] = Math.floor(n/p)
  // }
  // return array;
}

//const input = [0,2,7,0];
 const array = `4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5`;
 const input = array.split('\t').map(Number);
 console.log(input)

const totalArrays = [input.join('')];
let cont = true;

while (cont) {
  const max = Math.max(...input);

  const indexToStart = input.indexOf(max) + 1;
  input[input.indexOf(max)] = 0;
  let maxSum = max;
  let i = indexToStart;

  while (maxSum > 0) {
    if (i >= input.length) {
      i = 0;
    }

    input[i] = input[i] + 1;
    i++;
    maxSum--;
  }

  if (totalArrays.indexOf(input.join('')) < 0) {
    totalArrays.push(input.join(''));
  } else {
    cont = false;
  }
}

console.log(totalArrays.length)

// const getAddArray = (number, parts) => {
//   const mainParts = Math.ceil(number/parts);
//   const array = [];
//   let sum = 0;
//
//   for (let i = 0; i < parts; i++) {
//       array[i] = mainParts;
//       sum += mainParts;
//
//       if (sum > number) {
//         array.pop();
//         array[array.length] = sum - number;
//         break;
//       }
//   }
//
//   if (array.length < parts ) {
//     for (let j = array.length; j < parts; j++) {
//       array[j] = 0;
//     }
//   }
//
//   return array;
//
// }
//
// const arrayToAdd = getAddArray(max,input.length)
// //console.log(arrayToAdd)
//
// input[indexToStart] = input[indexToStart] + arrayToAdd[0]


//[2,2,1,2]
//[2,2,2,1]
// const total = 0;
// const arrayToSum = []
// while (total <= max) {
//
// }

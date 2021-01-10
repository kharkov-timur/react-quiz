// function squadSum(numbers) {
//    return numbers
//      .reduce((acc, item) => acc + (item * item), 0)
//   }

// console.log(squadSum([]))

// function makeNegative(num) {
//   // return num < 0 ? num : -num
//   return -Math.abs(num)
// }
//
// console.log(makeNegative(1));

// function summation(num) {
//   let res = 0
// console.log(Array(num).fill(true))
// while (num) {
//   res += num--
//   console.log(res)
// }

// for (let i = 1; i <= num; i++) {
//   res += i
// }
// return res
// }

// console.log(summation(8))

// function validatePin(pin) {
// if (!pin.match(/\D/)) {
//   if (pin.length === 4 || pin.length === 6) {
//     return true
//   }
// }
// return false

// return /^(\d{4}|\d{6})$/.test(pin)
// }

// console.log(validatePin('3450'))

// function order(words) {
//   console.log(words.split(' ')
//     .sort((a, b) => a.match(/\d/)[0] - b.match(/\d/))
//     .join(' '))
//
//   return words.split(' ')
//       .sort((a, b) => a.match(/\d/) - b.match(/\d/))
//       .join(' ')
// }
//
// console.log(order(""))

function getSum(a, b) {
  let res = 0
  if (a === b) {
    return a
  } else if (a === 0 || b === 0) {
    return a + b
  }
  for (let i = a; i === b; i--) {
    console.log(i)
    res += i
  }

  return res
}

console.log(getSum(-58, -513))

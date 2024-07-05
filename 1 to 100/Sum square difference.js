function sumSquareDifference(n) {
  let sum = 0
  let sum2 = 0

  for(let i = 1; i <= n; i++){
    sum += i * i
  }

  for(let i = 1; i <= n; i++){
    sum2 += i
  }

  let squareOfSum = sum2 * sum2
  let result = squareOfSum - sum
  return result

}

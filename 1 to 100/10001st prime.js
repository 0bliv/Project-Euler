function isPrime(num) {
  if (num <= 1) return false; // 1 is not a prime number
  if (num <= 3) return true; // 2 and 3 are prime numbers
  if (num % 2 === 0 || num % 3 === 0) return false; // multiples of 2 and 3 are not prime
  
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  
  return true;
}

function nthPrime(n) {
  if (n === 1) return 2; // 1st prime number
  if (n === 2) return 3; // 2nd prime number
  
  let count = 2; // starting count from 2 because we know 2 and 3 are prime
  let num = 3; // starting checking from 3
  let candidate = 3; // current candidate for being prime
  
  while (count < n) {
    candidate += 2; // check only odd numbers
    if (isPrime(candidate)) {
      count++;
      num = candidate; // update the nth prime number found
    }
  }
  
  return num;
}


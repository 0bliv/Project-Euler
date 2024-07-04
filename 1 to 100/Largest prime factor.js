function largestPrimeFactor(number) {
  let lp = -1;

  while (number % 2 === 0) {
    lp = 2;
    number = number / 2;
  }

  for(let i = 3; i <= Math.sqrt(number); i = i+2){
    while (number % i === 0) {
      lp = i
      number = number / i
    }
  }

  if (number > 2){
    lp = number;
  }
return lp
}
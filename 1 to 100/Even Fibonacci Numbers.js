function fiboEvenSum(n) {
  let sum = 0;
  let a = 1;
  let b = 2;

    while (b <= n) {
        if (b % 2 === 0) {
            sum += b;
        }
        let next = a + b;
        a = b;
        b = next;
    }

  return sum;
}
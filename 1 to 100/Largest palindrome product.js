function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}

function largestPalindromeProduct(n) {
    let maxNum = Math.pow(10, n) - 1;
    let minNum = Math.pow(10, n-1);
    let largestPalindrome = 0;

    for (let i = maxNum; i >= minNum; i--) {
        for (let j = i; j >= minNum; j--) {
            let product = i * j;
            if (product <= largestPalindrome) {
                break;  // No need to check further if product is smaller than current largest palindrome
            }
            if (isPalindrome(product)) {
                largestPalindrome = product;
            }
        }
    }

    return largestPalindrome;
}


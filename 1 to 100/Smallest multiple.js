function gcd(a, b) {
    // Euclidean algorithm to find gcd
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    // Calculate lcm using the relationship with gcd
    return Math.abs(a * b) / gcd(a, b);
}

function smallestMult(n) {
    let lcmResult = 1;
    for (let i = 2; i <= n; i++) {
        lcmResult = lcm(lcmResult, i);
    }
    return lcmResult;
}
export class Series {
    
    static calculateN(n: number): number {
        if (n < 3) throw new Error("n debe ser mayor o igual a 3");

        const fib = fibonacci(n + 2);
        const prime = nthPrime(n - 2);
        const tri = triangular(n);

        return (5 * fib * 2 * prime) / (7 * tri);
    }
}

export function fibonacci(n: number): number {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return n === 0 ? 0 : b;
}

export function nthPrime(n: number): number {
    const primes: number[] = [];
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes[n - 1];
}

export function isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

export function triangular(n: number): number {
    return (n * (n + 1)) / 2;
}

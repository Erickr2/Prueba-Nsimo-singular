import { Series, fibonacci, nthPrime, isPrime, triangular } from "../lib/Series";

describe("Funciones auxiliares", () => {
  describe("fibonacci", () => {

    test("fibonacci(0) debe ser 0", () => {
      expect(fibonacci(0)).toBe(0);
    });

    test("fibonacci(1) debe ser 1", () => {
      expect(fibonacci(1)).toBe(1);
    });

    test("fibonacci(7) debe ser 13", () => {
      expect(fibonacci(7)).toBe(13);
    });

  });

  describe("isPrime", () => {
    
    test("números < 2 no son primos", () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
    });

    test("2,3,5 son primos", () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(5)).toBe(true);
    });

    test("4,6,9 no son primos", () => {
      expect(isPrime(4)).toBe(false);
      expect(isPrime(6)).toBe(false);
      expect(isPrime(9)).toBe(false);
    });

  });

  describe("nthPrime", () => {

    test("nthPrime(1) debe ser 2", () => {
      expect(nthPrime(1)).toBe(2);
    });

    test("nthPrime(3) debe ser 5", () => {
      expect(nthPrime(3)).toBe(5);
    });

    test("nthPrime(6) debe ser 13", () => {
      expect(nthPrime(6)).toBe(13);
    });

  });

  describe("triangular", () => {

    test("triangular(1) debe ser 1", () => {
      expect(triangular(1)).toBe(1);
    });

    test("triangular(5) debe ser 15", () => {
      expect(triangular(5)).toBe(15);
    });

    test("triangular(10) debe ser 55", () => {
      expect(triangular(10)).toBe(55);
    });

  });
});

describe("Series.calculateN", () => {

  test("debe lanzar error si n < 3", () => {
    expect(() => Series.calculateN(2)).toThrow("n debe ser mayor o igual a 3");
  });

  test.each([3, 4, 5, 6, 7, 8, 9, 10, 11])("calculateN(%i) devuelve un número válido", (n) => {
    const result = Series.calculateN(n);
    expect(typeof result).toBe("number");
    expect(isNaN(result)).toBe(false);
    expect(Number.isFinite(result)).toBe(true);

  });

  
});

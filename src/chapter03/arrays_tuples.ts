(function arrays() {
  let a = [1, 2, 3];
  let b = [1, 2, 'a'];
  let c = [1, true, 'b'];
  let d = [];
  const e = [1, 2, 3];

  a.push(1);
  // not possible to push a string:
  // a.push('a');

  let f: number[];
  f = [1, 2];

  // other syntax, discouraged by TSLint:
  let g: Array<number>;

  // read-only arrays
  let h: readonly number[] = [1, 2, 3];
  // fail:
  // h.push(4);
  // h[0] = 1;
})();

(function tuples() {
  let a: [number];  // tuple with length one
  a = [1];
  // both are forbidden:
  // a = [1, 2];
  // a = ['a'];

  let coordinates1: [number, number] = [-5, 3];  // has to be typed explicitly
  let coordinates2 = [-5, 3];  // infers array, not tuple

  // mixed tuple with optional number for discounted price:
  let books: [string, number, number?][] = [
    ["Hegel. Der Weltphilosoph", 25.00, 15.00],
    ["Hegel. Der Philosoph der Freiheit", 40.00]
  ];

  // read-only tuples
  let b: readonly [number, number] = [-5, 3];
  // fails:
  // b[0] = -6;
})();

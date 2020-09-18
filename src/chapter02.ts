let a = 1 + 2;
let b = a + 3
let c = {
  apple: a,
  banana: b
}
let d = c.apple * 4

let e = {};

let f = (() => { return; })();

let arr = [1, 'a', () => undefined, true];

let x = arr[0];

// Type cannot be infered.
//let arr2 = [];
//let y = arr2[0];

function what() {
  return;

  const ar = 2;
}

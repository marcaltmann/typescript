(function primitives() {
  // any
  const c: any = 100;

  // unknown
  const d: unknown = 30;

  // boolean
  let e: boolean = true;
  let f: true = true;
  let g = true;
  const h = true;

  // number
  let n1 = 100
  let n2: number = 101;
  const n3 = 101;
  const n4: 102 = 102;

  // bigint
  const a = 100n;
  const b: bigint = BigInt(5);

  // string
  let s1 = 'hello';
  const s2 = 'world!';
  let s3: string = 'hello world!';
  const s4: 'hello world!' = 'hello world!';

  // symbol
  let sym1 = Symbol('a');
  let sym2: symbol = Symbol('b');
})();

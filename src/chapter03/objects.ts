(function objects() {
  let o1: object = {};

  let o2: object = {
    a: 'x'
  };
  // Cannot be accessed:
  // console.log(o2.a);

  // Infered shape
  let o3 = {
    b: 'x'
  };

  let o4 = {
    a: 1,
    b: 'hello',
    c: {
      x: 'a'
    }
  }

  // Explicit shape
  let o5: { b: number } = {
    b: 5
  };

  const o6: { b: number } = {
    b: 5
  };

  /**
   * Does not work:
   * o5 = {
   *   a: 5
   * };
   */

  // typed objects and classes
  let o: { forename: string, surname: string };

  class Person {
    constructor(public forename: string, public surname: string) {}
  }

  o = new Person('Felix', 'Leiter');

  // optional properties
  let q: { forename: string, middlename?: string, surname: string };

  q = {
    forename: 'Alfred',
    surname: 'Hitchcock'
  };

  q = {
    forename: 'Roger',
    middlename: undefined,
    surname: 'Thornhill'
  };

  // index signatures
  let t: {
    forename: string,
    surname: string,
    [nameDescriptor: string]: string
  };

  t = {
    forename: 'Theodor',
    name1: 'zu',
    name2: 'und',
    name3: 'von',
    surname: 'Guttenberg'
  }

  // {} is pretty permissive
  let z: {};
  z = { a: 5, b: 2 };
  z = 'hello';
  z = 2;
  z = ['a'];
  z = true;
  // Don't work:
  // z = null;
  // z = undefined;
})();

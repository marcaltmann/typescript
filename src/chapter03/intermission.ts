(function aliases() {
  // type aliases
  type Price = number

  let priceForCoffee: Price = 2.50;

  type Product = {
    name: string,
    price: Price
  };

  let coffee: Product = {
    name: 'Americano',
    price: priceForCoffee
  };
})();

(function union() {
  // union types
  type Person = {
    name: string,
    sex: string
  };

  type Product = {
    name: string,
    price: number
  };

  let a: Person | Product;

  // either Person
  a = {
    name: 'Christopher',
    sex: 'male'
  };

  // or Product
  a = {
    name: 'Americano',
    price: 2.5
  };

  // or both
  a = {
    name: 'Holly',
    sex: 'female',
    price: 50
  };
})();

(function intersection() {
  // intersection types
  type Person = {
    name: string,
    sex: string
  };

  type Product = {
    name: string,
    price: number
  };

  let a: Person & Product;

  // only both works
  a = {
    name: 'Holly',
    sex: 'female',
    price: 50
  };
})();

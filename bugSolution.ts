function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both arguments must be numbers.');
  }
  return a + b;
}

let result = add(1,2);
console.log(result); //Outputs 3

try{
    let result2 = add("hello", 2); // This will throw an error
    console.log(result2);
} catch (e) {
    console.error(e);
}

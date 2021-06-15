const fib = require("./fibonacci");

test('Number -1 the following Fibonacci sequence', () => { 
    expect(fib(-1)).toEqual([]);
})

test('Number 0 the following Fibonacci sequence', () => { 
    expect(fib(0)).toEqual([]);
})

test('Number 1 the following Fibonacci sequence', () => { 
    expect(fib(1)).toEqual([0,1]);
})

test('Number 8 the following Fibonacci sequence :- 0, 1, 1, 2, 3, 5, 8, 13, 21', () => { 
     expect(fib(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
 })

 test('Number 7 the following Fibonacci sequence', () => { 
    expect(fib(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
})



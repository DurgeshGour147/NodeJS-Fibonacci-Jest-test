 const fibonacci = (n) =>{
    if(n <= 0)
       return [];
    if (n === 1) {
        return [0, 1];
      } else {
        var arr = fibonacci(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
      }
 }
 module.exports = fibonacci;

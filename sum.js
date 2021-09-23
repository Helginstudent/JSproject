function sum(arr) {
    return arr.reduce(function (a, b) {
       return a + b;
    }, 0);
 }

 let array = [5,6];
 
 console.log(sum(array));

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++)
      console.log(
      (i % 3 ? '' : 'Fizz')
      +
      (i % 5 ? '' : 'Buzz')
      ||
      i
    );
  }
  
  fizzBuzz(100);
  
  function fizzBuzz2(num) {
    for(let i = 1; i <= num; i++)
    console.log(
      !(i % 15) ? 'Fizzbuzz'
      :
      !(i % 3) ? 'Fizz'
      :
      !(i % 5) ? 'Buzz'
      :
      i
    );
  }
  
  // fizzBuzz2(50);
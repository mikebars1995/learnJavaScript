function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let generator = generateSequence();
  
  for(let value of generator) {
    alert(value); // 1, затем 2, затем 3
  }


let range = {
    from: 1,
    to: 5,
  
    *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
  
  alert( [...range] ); // 1,2,3,4,5

  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  
  function* generatePasswordCodes() {
  
    // 0..9
    yield* generateSequence(48, 57);
  
    // A..Z
    yield* generateSequence(65, 90);
  
    // a..z
    yield* generateSequence(97, 122);
  
  }
  
  let str = '';
  
  for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }
  
  alert(str); // 0..9A..Za..z

  for(let value of generateSequence(1, 5)) {
    alert(value); // 1, потом 2, потом 3, потом 4, потом 5
  }



  async function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) {
  
      // ура, можно использовать await!
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      yield i;
    }
  
  }
  
  (async () => {
  
    let generator = generateSequence(1, 5);
    for await (let value of generator) {
      alert(value); // 1, потом 2, потом 3, потом 4, потом 5
    }
  
  })();

//   result = await generator.next(); // result = {value: ..., done: true/false}
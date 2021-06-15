function Calculator() {
    let operators = [
      ['+', (a, b) => a + b],
      ['-', (a, b) => a - b],
    ];
    this.calculate = function (str) {
      let res
      partStr = str.split(" ");
      for (let key of operators) {
        if (key[0] == partStr[1]) {
          res = key[1]((+partStr[0]), (+partStr[2]));
        }
      }
      return res;
    }
    this.addMethod = function (name, func) {
      operators.push([name, func])
    }
  };

  function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
    this.calculate = function(str) {
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
      return this.methods[op](a, b);
    }
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }
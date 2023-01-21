const check = (str, bracketsConfig) => {
  if (str.length % 2 !== 0) {
    return false;
  }

  config = bracketsConfig.flat();
  const stack = [];

  for (const x of str) {
    let index = config.indexOf(x);

    if (index >= 0) {
      let last = stack[stack.length - 1];
      
      // open brackets
      if (index % 2 === 0) {
        // identical brackets
        if ( x == config[index + 1] && last == x) {
          stack.pop();
        } else {
          stack.push(config[index + 1]);
        }
      }

      // close brackets
      else if (x == last) {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

module.exports = check;

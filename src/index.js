module.exports = function check(str, bracketsConfig) {
  // your solution
  // const map = new Map();
  // bracketsConfig.forEach((element) => {
  //   map[element[0]] = element[1];
  // });
  // console.log(map);
  // let stack = [];

  // for (let i = 0; i < str.length; i++) {
  //   const bracket = str[i];
  //   if (
  //     bracket === "(" ||
  //     bracket === "[" ||
  //     bracket === "{" ||
  //     bracket === "|"
  //   ) {
  //     stack.push(bracket);
  //   } else {
  //     const element = stack.pop(bracket);
  //     if (bracket !== obj[element]) {
  //       return false;
  //     }
  //   }
  // }
  // return true;
  for (let i = 0; i < str.length; ++i) {
    let match = false;
    for (pattern of bracketsConfig) {
      if (pattern.indexOf(str[i]) >= 0) {
        match = true;
        break;
      }
    }
    if (!match) return false;
  }

  let map = {};
  for (let pattern of bracketsConfig) {
    map[pattern[0]] = pattern[1];
  }

  //check pair brackets
  let stack = [];
  for (let i = 0; i < str.length; ++i) {
    let match = false;
    let sameValue = false;
    for (let property in map) {
      if (str[i] == property) {
        match = true;
        if (property == map[property]) {
          sameValue = true;
        }
        break;
      }
    }

    if (match) {
      if (str[i] == stack[stack.length - 1] && sameValue) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else {
      let lastBracket = stack.pop();
      if (str[i] !== map[lastBracket]) return false;
    }
  }

  if (stack.length !== 0) return false;

  return true;
};

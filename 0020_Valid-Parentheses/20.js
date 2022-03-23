/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  if(s.length % 2 === 1) { return false; }

  const hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (const c of s) {
    if (c in hash) {
      stack.push(c);
    } else {
      const top = stack.pop();
      if (top === undefined || hash[top] !== c) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
module.exports = function check(str, bracketsConfig) {
    if (str.length %2 !=0) {
        return false;
    }
    const open = bracketsConfig.map( currentValue => currentValue[0])
    const close = bracketsConfig.map( currentValue => currentValue[1])
    let checked_brackets = [];
    for (let i=0; i<str.length; i++) {
      if (i === 0 && !open.includes(str[i])) {
        return false;
      }
      else if (i === str.length-1 && !close.includes(str[i])) {
          return false;
      }
      else if (close.includes(str[i]) && checked_brackets[checked_brackets.length-1] == open[close.indexOf(str[i])] ) {
        checked_brackets.pop()
      }
      else if (open.includes(str[i])) {
        checked_brackets.push(str[i])
      }
    }
    if (checked_brackets.length > 0) {
      return false
    }
    else {return true}
  }

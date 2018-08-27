function alphanbetPosition(text){
    var char = text.toLowerCase().split('');
    var arr = [];
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    
    for(var i = 0; i < char.length; i++){
  
      if(alphabet.indexOf(char[i]) > -1){
        arr.push(alphabet.indexOf(char[i]) + 1);
        var arr2 = arr.join(" ");
      }
      
    }
    return arr2;
  }

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));

/************1 */
function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
  }
/********* 2 Method */
function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }
  /***********3 */
  function alphabetPosition(text) {
    return text.toLowerCase().match(/[a-z]/g).map(function(currentValue) {
      return currentValue.charCodeAt(0) - 96;
    }).join(" ");
  }

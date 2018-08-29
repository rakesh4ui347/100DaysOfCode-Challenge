function array_diff(a, b) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) === -1) {
        result.push(a[i]);
      }
    }
    
    return result;
  }
  /*********** */
  Test.describe("Sample tests", function() {
    Test.it("Should pass Sample tests", function() {
      Test.assertDeepEquals(array_diff([], [4,5]), [], "a was [], b was [4,5]");
      Test.assertDeepEquals(array_diff([3,4], [3]), [4], "a was [3,4], b was [3]");
      Test.assertDeepEquals(array_diff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
    });
  }); 
  
  /*************** */
  function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
  }
  /*********** */
  function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }
  /******* */
  function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
  }

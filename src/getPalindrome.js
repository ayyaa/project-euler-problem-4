function getPalindrome() {
 var max = 0;
  for(var i = 999; i > 99; i--) {
    for(var k = 999; k > 99; k--) {
      var nilai = i * k;
      if (nilai <= max) break;
      if (nilai.toString() === nilai.toString().split("").reverse().join("")) {
        max = nilai;
      }
    }
  }
  return max;
}

module.exports=getPalindrome;

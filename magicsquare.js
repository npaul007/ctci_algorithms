function generateMagic3x3(n) {
    let i, j;
    i = Math.floor(n / 2);
    j = n - 1;
    let baseMatrix = [
      [],
      [],
      []
    ];
    baseMatrix[i][j] = 1;
  
    for (let k = 2; k <= n * n; k++) {
      i -= 1;
      j += 1;
  
      if (i < 0 && j === n) {
        i = 0;
        j = n - 2;
      } else if (i < 0) {
        i = n - 1;
      } else if (j === n) {
        j = 0;
      }
  
      if (typeof baseMatrix[i][j] === 'number') {
        i += 1;
        j -= 2;
      }
  
      baseMatrix[i][j] = k;
    }
}

console.log(generateMagic3x3(3))
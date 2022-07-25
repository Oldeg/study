function findDifference([a, b, c], [d, e, f]) {
    let sumA = a*b*c;
    let sumB = d*e*f;
    let res = Math.abs(sumA - sumB);
    return res;
  }
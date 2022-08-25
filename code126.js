function findLowestInt(k, n = 1) {
    while (n <= Number.MAX_SAFE_INTEGER) {
      let k1 = n * k, k2 = n * (k + 1), s1 = k1.toString(), s2 = k2.toString()
      if (s1.split('').sort().join('') === s2.split('').sort().join('')) return n
      n++
    }
  } 
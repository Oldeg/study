function XO(str) {
    const o = str.match(/o/gi);
    const x = str.match(/x/gi);
    return (x && x.length) === (o && o.length);
  }       
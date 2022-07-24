function usdcny(usd) {
    let coefficient = 6.75;
    let convert = (usd*coefficient).toFixed(2);
    return (`${convert} Chinese Yuan`)
  }
function isLockNessMonster(s) {
    let oneEx = /tree fiddy|three fifry|3.50/ig;
    let res = oneEx.test(s);
    return res;
  }
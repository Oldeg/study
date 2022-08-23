function score(n){
    return  n===0? 0: 2**(n.toString(2).length)-1
  }    
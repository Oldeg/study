function getRealFloor(n) {
    if (n<=0){
      return n;
    }
    if(n<=12){
      return n-1;
    } 
    if (n>=13){
      return n-2;
    }
  }
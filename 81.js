function factorialize(num) {
    let answer = 1;
    if (num == 0 || num == 1){
      return answer;
    }else{
      for(var i = num; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  
  factorialize(5);
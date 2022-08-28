function maxMultiple(d, b){
    let res = 0;
   for(let i = d; i<=b;i++){
     if(i%d==0){
       res = i;
     }
   }
    return res;
  } 
function dutyFree(normPrice, discount, hol){
    let res =Math.floor(hol/(normPrice*(discount/100)));
      return res;
    } 
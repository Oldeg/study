const howManyDalmatians = (num) => {
  
    const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    if (num<= 10){
      return dogs[0]
    }
    
    if (num > 10 && num <=50){
      return dogs[1]
    }
    
    if (num > 50 && num <=100){
      return dogs[2]
    }
    
    if (num === 101){
      return dogs[3]
    }
    }
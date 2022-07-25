function gooseFilter (birds) {
    let arr1 = birds;
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const intersection = arr1.filter(element => !geese.includes(element));
    return intersection;
        
    
  };
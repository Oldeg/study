function getGrade (s1, s2, s3) {
    let res = (s1+s2+s3)/3;
    if (res>=90){
      return 'A';
    } 
    if (res>=80){
      return 'B';
    } 
    if (res>=70){
      return 'C'
    } 
    if (res>=60){
      return 'D';
    } else {
      return 'F';
    }  
  }
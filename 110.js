function sumAll(arr) {
    function x (arr){
     if(arr[0]<arr[1]){
       return arr[1]
     }return arr[0];
   }
   let c = x(arr);
     let num = 0;
     if (c == arr[0]){
     for( let i =arr[1]; i<=c;i++){
       num+= i;
       }
     }
     if (c == arr[1]){
       for( let i =arr[0]; i<=c;i++){
       num+= i;
       }
     }
     return num;
   }
   
   sumAll([1, 4]);    
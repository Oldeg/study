function binaryPyramid(m,n){
    let ans = 0;
    for (let i=m;i<=n;i++){
     ans += parseInt(i.toString(2))
    }
      return ans.toString(2)
    }  
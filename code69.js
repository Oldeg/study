function isPalindrome(x) {
    let re = /[\W_]/g;
    let lowRegStr = x.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
    }
function removeUrlAnchor(url){
    let f = url.split('').indexOf('#')
    if (f>0){
    return url.split('').slice(0,f).join('');
      }
    return url;
  }
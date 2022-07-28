function hello(name) {
    if (name === "" || name === undefined ){
      return 'Hello, World!';
    }else {
      let name3 = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      return `Hello, ${name3}!`
    }
}
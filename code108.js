function bmi(w, h) {
    let index = w/h**2;
    return index <= 18.5? 'Underweight':index<=25? 'Normal': index<= 30? 'Overweight':'Obese';
  }
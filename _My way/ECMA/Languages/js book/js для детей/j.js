  let sum = 0;
  let i = 0;
  let wedgesNeeded = 100;
  
  while (wedgesNeeded > sum) {
    switch(limes[i]) {
      case 'small':
        sum += 6;
        break;
      case 'medium':
        sum += 8;
        break;
      case 'large':
        sum += 10;
        break;
    }
    i += 1;
  }

  return i;
}

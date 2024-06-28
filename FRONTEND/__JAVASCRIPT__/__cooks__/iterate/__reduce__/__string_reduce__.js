const uniTotal1 = (str) =>
  [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);


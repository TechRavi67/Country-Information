const display = (val) => {
  document.getElementById('display').value += val;
  return val;
}

const solve = () => {
  let x = document.getElementById('display').value;
  let y = eval(x);
  document.getElementById('display').value = y;
  return y;
}

const clearScreen = () => {
  document.getElementById('display').value = '';
}
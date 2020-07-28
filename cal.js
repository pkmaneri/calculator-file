function mathWrapper(operation) {
  var num11 = document.getElementById('num1').value;
  var num21 = document.getElementById('num2').value;
  num11 = parseInt(num11);
  num21 = parseInt(num21);
  var output;
  if (operation === 'add') {
    output = add(num11, num21);
  } else if (operation === 'sub') {
    output = sub(num11, num21);

  } else if (operation === 'multiple') {
    output = multiple(num11, num21);

  } else if (operation === 'div') {
    output = div(num11, num21);
  }
  console.log(output);
  document.getElementById('container').innerHTML = output;

}
function add(num1, num2) {
  var sum = num1 + num2;
  return sum
}
function sub(num1, num2) {
  var sub = num1 - num2;
  return sub
}
function multiple(num1,num2) {
  var multiple = num1 * num2;
  return multiple
}
function div(num1,num2) {
  var div = num1 / num2;
  return div
}



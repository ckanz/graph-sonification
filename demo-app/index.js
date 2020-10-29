function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello there!';

  return element;
}

console.log('Hello there!')
document.body.appendChild(component());

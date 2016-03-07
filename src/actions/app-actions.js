export const greet = name => ({
  type: 'GREET',
  payload: name,
});

export const generate = () => dispatch =>
  fetch('http://uinames.com/api/')
    .then(response => response.json())
    .then(data => dispatch(greet(data.name)));

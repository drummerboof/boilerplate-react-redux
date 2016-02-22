export const greet = (name) => {
  return {
    type: 'GREET',
    payload: name
  }
};

export const generate = () => {
  return dispatch => {
    fetch('http://uinames.com/api/').then(response => {
      response.json().then(data => dispatch(greet(data.name)));
    });
  };
};

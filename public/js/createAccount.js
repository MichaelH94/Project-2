
$(document).on('click', '#createAccount', handleCreateAccount);

// call back fnction to initiate adding a user
let handleCreateAccount = () => {
  event.preventDefault();

  //json object
  addUser ({
    username: createUsername,
    name: name,
    password: createPassword,
    age: age,
    location: location,
    style: playStyle,
    platform: platform
  });
}

//post function using sequalize
let addUser = (userData) => {
  $.post('/api/Users', userData);
}

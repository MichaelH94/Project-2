
$(document)
$(document).on('click', '#createAccount', handleCreateAccount);

let handleCreateAccount = () => {
  event.preventDefault();
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

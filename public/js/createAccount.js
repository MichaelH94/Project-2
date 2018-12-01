
let handleCreateAccount = () => {
  event.preventDefault();

  $('body').html("DONE");

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

let addUser = (userData) => {
  $.post('/create-account', userData);
}

$('#createAccount').on('click', handleCreateAccount);



//post function using sequalize

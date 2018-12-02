
let handleCreateAccount = () => {
  event.preventDefault();

  let username = $('#createUsername').val().trim();
  let name = $('#name').val().trim();
  let password = $('#creatPassword').val();
  let age = $('#age').val().trim();
  let location = $('#location').val().trim();
  let style = $('#playStyle').val();
  let platform = $('#platform').val();

  //json object
  addUser({
    username: username,
    name: name,
    password: password,
    age: age,
    location: location,
    style: style,
    platform: platform
  });
  window.location.href = "http://localhost:3000/login";
}

let addUser = (userData) => {
  $.post('/create-account', userData);
  console.log('made it to the add user function');
}

$('#createAccount').on('click', handleCreateAccount);



//post function using sequalize

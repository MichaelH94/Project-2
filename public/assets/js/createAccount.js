

let handleCreateAccount = () => {
  event.preventDefault();

  let username = $('#createUsername').val().trim();
  let name = $('#name').val().trim();
  let password = $('#creatPassword').val();
  let age = $('#age').val().trim();
  let location = $('#location').val().trim();
  let style = $('#playStyle').val();
  let platform = $('#platform').val();

  addUser({
    username: username,
    name: name,
    password: password,
    age: age,
    location: location,
    style: style,
    platform: platform
  });

}

let addUser = (userData) => {
  $.post('/api/create-account', userData);
}

$('#createAccount').on('click', handleCreateAccount);



//post function using sequalize

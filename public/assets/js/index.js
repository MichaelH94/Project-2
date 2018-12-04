$(document).ready(() => {


function createProfile(username) {
  User.findAll({
    where: {
      username: username
    }
  }).then((res) => {
    let name = res.name;
    let age = res.age;
    let location = res.location;
    let platform = res.platform;
    let style = "";

    if(res.style == 1) {
      style = "Casual" 
    } else if(res.style == 2) {
      style = "Advanced"
    } else {
      style = "Completionist"
    }

    $('#playerStyle').text(style);
    $('#userName').text("Name: " + name)
    $('#itemAge').text("Age: " + age);
    $('#itemLocation').text("Location: " + location)
    $('#itemPlatform').text("Platform: " + platform)
    
  })
};

let addNewGame = () =>{
  event.preventDefault();

  let newGame = $('#newGame').val();
  console.log(newGame)
  addGame(newGame)

};

$('#addnewGame').on('click', addNewGame);

let addGame = (gameData) => {
  $.post('/add-game', gameData)
}

});
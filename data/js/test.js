const female = function getOneFemaleFake() {
  for (let index = 1; index < 2; index++) {
    $.get(`https://randomuser.me/api/?gender=female`, function(data) {
      console.log(data);
      $("#search-female").on("click", function() {
        $('#name').append(`<li id=${index}>Prénom: ${data.results[0].name.first}</li>`);
        $('#name').append(`<li id=${index}>Nom: ${data.results[0].name.last} </li>`);
        $('#photo').append(`<li id=${index}>Photo de profil: <img src=${data.results[0].picture.large}></li>`);
        $('#psw').append(`<li id=${index}>Login: ${data.results[0].login.username}</li>`);
        $('#psw').append(`<li id=${index}>Password: ${data.results[0].login.password}</li>`);
        $('#loc').append(`<li id=${index}>Rue: ${data.results[0].location.street}</li>`);
        $('#loc').append(`<li id=${index}>Code Postal: ${data.results[0].location.postcode}</li>`);
        $('#loc').append(`<li id=${index}>Ville: ${data.results[0].location.city}</li>`);
          });
        })
    }
  }
female();

const male = function getOneMaleFake() {
  for (let index = 1; index < 2; index++) {
    $.get(`https://randomuser.me/api/?gender=male`, function(data) {
      console.log(data);
      $("#search-male").on("click", function() {
        $('#name').append(`<li id=${index}>Prénom: ${data.results[0].name.first}</li>`);
        $('#name').append(`<li id=${index}>Nom: ${data.results[0].name.last} </li>`);
        $('#photo').append(`<li id=${index}>Photo de profil: <img src=${data.results[0].picture.large}></li>`);
        $('#psw').append(`<li id=${index}>Login: ${data.results[0].login.username}</li>`);
        $('#psw').append(`<li id=${index}>Password: ${data.results[0].login.password}</li>`);
        $('#loc').append(`<li id=${index}>Rue: ${data.results[0].location.street}</li>`);
        $('#loc').append(`<li id=${index}>Code Postal: ${data.results[0].location.postcode}</li>`);
        $('#loc').append(`<li id=${index}>Ville: ${data.results[0].location.city}</li>`);
        })
    })
  }
}
male();

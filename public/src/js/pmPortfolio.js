document.addEventListener("DOMContentLoaded", function(event) {

    let cookie = document.cookie

    function parseJWT (token) {
      let base64Url = token.split('.')[1];
      let base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    };

    $.get(`users/${parseJWT(cookie).userId}`)
    .done(function(result){
      $('#pmPortfolio').text(`Hello ${result[0].first_name}`)
      $('body').find('#manager').val(parseJWT(cookie).userId)
    })

    let promises = []

$.get(`properties_users/managerProp/${parseJWT(cookie).userId}`)
    .then(result => {
      result.forEach(prop => {
        promises.push($.getJSON(`properties/${prop}`))
    })
    Promise.all(promises)
    .then(function(eles){
      cards(eles)
    })
 })

 let promises2 = []

 $.get(`properties_users/managerTen/${parseJWT(cookie).userId}`)
     .then(result => {
       result.forEach(ten => {
         promises2.push($.getJSON(`users/${ten}`))
     })
     Promise.all(promises2)
     .then(function(eles){
       cards2(eles)
     })
  })

function cards(content){
      for (let i = 0; i < content.length; i++) {
      let cardHtml =
      `<div class="col s12 m6">
          <div class="card">
          <div class="card-image">
            <img class ="responsive" src="${content[i][0].img}">
            <span class="card-title">${content[i][0].state}</span>
          </div>
            <div class="card-content">
              <p>${content[i][0].addressline1}</p>
            </div>
          </div>
        </div>`


        let homeCards = $("#cards")
        homeCards.append(cardHtml)
      }
    }

    function cards2(content){
          for (let i = 0; i < content.length; i++) {
          let cardHtml =
            `<div class="col s12 m12">
              <div class="card">

                <div class="card-content tenCon">
                    <p>${content[i][0].first_name} ${content[i][0].last_name}</p>
                    <p>${content[i][0].email}</p>
                    <p>${content[i][0].phone_number}</p>
                </div>
              </div>
            </div>`


            let homeCards = $("#cards2")
            homeCards.append(cardHtml)
          }
        }

    $(".button-collapse").sideNav();

    $('.slider').slider();

   $('body').removeClass('fade-out');

   $('.modal').modal();

});

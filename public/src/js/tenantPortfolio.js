document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

let cookie = document.cookie

function parseJWT (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

$.get(`users/${parseJWT(cookie).userId}`)
.done(function(result){
  $('#tenantPortfolio').text(`Hello ${result[0].first_name}`)
})

let promises = []

$.get(`properties_users/tenantMan/${parseJWT(cookie).userId}`)
.then(result => {
  $.getJSON(`users/${result[0].manager_id}`)
  .then(ele => {
    let cardHtml =
    `<div class="col s12 m12">
        <div class="card">
          <div class="card-content">
            <h4>${ele[0].first_name}</h4>
            <h4>${ele[0].phone_number}</h4>
            <h4>${ele[0].email}</h4>
          </div>
        </div>
      </div>`


      let homeCards = $("#cards")
      homeCards.append(cardHtml)
  })
})

$.get(`properties_users/tenantMan/${parseJWT(cookie).userId}`)
.then(result => {
  $.getJSON(`contracts/${result[0].contract_id}`)
  .then(ele => {
    console.log(ele)
    let cardHtml =
    `<img src="${ele}">`


      let homeCards = $("#cards2")
      homeCards.append(cardHtml)
  })
})

    $(".button-collapse").sideNav();

    $('.slider').slider();

   $('body').removeClass('fade-out');

   $('.modal').modal();

});

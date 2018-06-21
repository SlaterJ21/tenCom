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
  $.getJSON(`users/${result}`)
  .then(ele => {
    let managerInfo = [`${ele[0].first_name} ${ele[0].last_name}`, ele[0].phone_number, ele[0].email]
    console.log(managerInfo)
    console.log(ele)
    let cardHtml =
    `<div class="col s12 m4">
        <div class="card">
          <div class="card-content">
            <p>${ele[0].first_name}</p>
            <p>${ele[0].phone_number}</p>
          </div>
        </div>
      </div>`


      let homeCards = $("#cards")
      homeCards.append(cardHtml)
  })
//   result.forEach(prop => {
//     promises.push($.getJSON(`properties/${prop}`))
// })
// Promise.all(promises)
// .then(function(eles){
//   cards(eles)
//   // var address =  ele[0].addressline1
//   // ans.push(address)
// })
})

// ajax request on dom ready
// $.ajax({url: "/users", success: function(result){
//   alert(result);
// }});



//ajax request on user action

//
// $('.header').click(function(){
//   $(event.target).css('color', 'blue')
// })
//
// console.log(calculator.add(5,5))

$.getJSON("items.json", function(content){
      console.log(content)


      for (var i = content.length-3; i < content.length; i++) {
      let cardHtml =
        `<div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="${content[i].img}">
              <span class="card-title">${content[i].title}</span>
            </div>
            <div class="card-content">
              <p>${content[i].cardContent}</p>
            </div>
            <div class="card-action">
              <a class="waves-effect waves-light btn modal-trigger"     href="#${content[i].id}">Details</a>

              <!-- Modal Structure -->
              <div id="${content[i].id}" class="modal modal-fixed-footer">
                <div class="modal-content">
                  <h4>${content[i].modalHeader}</h4>
                  <p>${content[i].modalContent}</p>
                </div>
                <div class="modal-footer">
                  <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
                </div>
              </div>
            </div>
          </div>
        </div>`


        let homeCards = $("#cards")
        homeCards.append(cardHtml)
      }
      // $('#modal4').modal();
      // $('#modal5').modal();
      // $('#modal6').modal();
    })

    $(".button-collapse").sideNav();

    $('.slider').slider();

   $('body').removeClass('fade-out');

   $('.modal').modal();

});

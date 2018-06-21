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
      // var address =  ele[0].addressline1
      // ans.push(address)
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
       console.log(eles)
       cards2(eles)
       // var address =  ele[0].addressline1
       // ans.push(address)
     })
  })



//ajax request on dom ready
// $.ajax({url: "/users", success: function(result){
//   $(".name").html(result);
// }});
//
// //ajax request on user action
// $('.name').click(function(){
//     $.ajax({url: "/properties", success: function(result){
//         $(".name").html(result);
//     }});
// });
//
// $('.header').click(function(){
//   $(event.target).css('color', 'blue')
// })
//
// console.log(calculator.add(5,5))

function cards(content, data){
      for (let i = 0; i < content.length; i++) {
      let cardHtml =
        `<div class="col s12 m4">
          <div class="card">

            <div class="card-action">
              <div class="text">${content[i][0].addressline1}</div>
            </div>
          </div>
        </div>`


        let homeCards = $("#cards")
        homeCards.append(cardHtml)
      }
      // $('#modal4').modal();
      // $('#modal5').modal();
      // $('#modal6').modal();
    }

    function cards2(content){
          for (let i = 0; i < content.length; i++) {
          let cardHtml =
            `<div class="col s12 m4">
              <div class="card">

                <div class="card-action">
                  <div class="text">${content[i][0].first_name}</div>
                </div>
              </div>
            </div>`


            let homeCards = $("#cards2")
            homeCards.append(cardHtml)
          }
          // $('#modal4').modal();
          // $('#modal5').modal();
          // $('#modal6').modal();
        }



    $(".button-collapse").sideNav();

    $('.slider').slider();

   $('body').removeClass('fade-out');

   $('.modal').modal();

});

// <div class="card-image">
//   <img src="${content[i].img}">
//   <span class="card-title">${content[i].title}</span>
// </div>
// <div class="card-content">
//   <p>${content[i].cardContent}</p>
// </div>

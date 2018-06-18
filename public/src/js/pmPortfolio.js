document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


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

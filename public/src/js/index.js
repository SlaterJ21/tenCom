document.addEventListener("DOMContentLoaded", function(event) {

$.getJSON("items.json", function(content){

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
    })

    $(".button-collapse").sideNav();

   $('body').removeClass('fade-out');

   $('.modal').modal();

});

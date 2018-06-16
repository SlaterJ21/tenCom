let calculator = {
    add: (x,y) => x + y,
    subtract: (x,y) => x - y,
}


$(document).ready(function(){

$('.header').click(function(e){
  $(event.target).css('color', 'blue')
})

$('.name').click(function(){
    $.ajax({url: "/properties", success: function(result){
        $(".name").html(result);
    }});
});

console.log(calculator.add(5,5))

})

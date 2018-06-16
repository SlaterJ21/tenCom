let calculator = {
    add: (x,y) => x + y,
    subtract: (x,y) => x - y,
}


$(document).ready(function(){

//ajax request on dom ready
$.ajax({url: "/users", success: function(result){
  $(".name").html(result);
}});

//ajax request on user action
$('.name').click(function(){
    $.ajax({url: "/properties", success: function(result){
        $(".name").html(result);
    }});
});

$('.header').click(function(){
  $(event.target).css('color', 'blue')
})

console.log(calculator.add(5,5))

})

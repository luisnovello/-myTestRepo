$(".one button").click(function() {
    let btnone=$(".one")
    btnone.text("Good Job!")
})
$(".two button").click(function(){
    $(".two").slideUp()
})
$(".three button").click(function(){
    $("three").append(html("<div>Newest Text</div>"))
})
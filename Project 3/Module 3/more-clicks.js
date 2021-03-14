$(".task-input button").click(function() {
    const input = $(".task-input input")
    const value = input.val()
    console.log(value)
    if (value.length > 0){
        const list = $("<li></li>").text(value)
        $(".task-list").append(list)
        input.val("")
    }
})
$(".decider button").click(function(){
    const on = $(".decider .status")
    on.toggleClass("active")
    if (on.hasClass("active")) {
        on.text("on")
        $(".decider button").text("Turn Off")
        $("decider img").attr("src", "https://media.giphy.com/media/szmSyB2PnehgY/giphy.gif")
    } else{
        on.text("Turn Off")
        $(".decider button").text("Turn On")
        $("decider img").attr("src", "http://placeimg.com/640/480/nature?")
    }
})



$(".cool-kids button").click(function(){
    $(".cool-kids main").css("background", $(this).css("background"))
})
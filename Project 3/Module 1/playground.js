$(".card.red h3").text("Abacus Central")
$(".card.blue h3").text("Grenadine Dreams")
$(".card.white h3").html("<code>CODE</code> Central")
$("h1").text("Hello, World")
$("body").css(
    {"font-family": "sans-serif",
    "background-color": "#777"}
)
$("section").css("display", "flex")
$(".card.red").css({
    "background-color": "red",
    "border":"solid 3px",
    "padding": "20px",
    "margin": "10px",
    "flex": "1 1"
})
$(".card.blue").css({
    "background-color": "blue",
    "border":"solid 3px",
    "padding": "20px",
    "margin": "10px",
    "flex": "1 1"
})
$(".card.white").css({
    "background-color": "white",
    "border":"solid 3px",
    "padding": "20px",
    "margin": "10px",
    "flex": "1"
})
$("code").css("font-size","1.7em")
$(".lead-cards p").css("font-family", "cursive")
$("section:nth-child(2)").css("transform","rotate(30deg) scale(.5)").css("transition","transform 3s ease")
// $("section:nth-child(2)").css("transform","rotate(30deg) scale(.5)").css("transition","transform 3s ease")
// $('section:nth-of-type(2)').css('transform','rotate(30deg) scale(.5)').css('transition','transform 3s ease')
$(".deprecated").remove()

//passing a function into a function
// function print (fn) {
//     return fn("hello")
// }
// console.log(print(function (string){
//     return string
// }))

$(".my-button").click(function(){
    console.log("Button Clicked!")
})

// Functions


// function sayHello(){
//     console.log("hello")
// }
// sayHello()

// Function parameters


// function say (word) {
//     console.log(word)


//Return Values
// function animal (type) {
//     return "I am a " + type //ES5
    //return `I am a ${type}` ES6


// console.log(animal("dog"))
// let

// say("hi")

//jQuery
//A function that returns something that you can call
//.text().css().attr(), or any other jquery methods/functions
//$(selector)
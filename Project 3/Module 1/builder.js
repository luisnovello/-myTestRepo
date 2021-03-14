const h3 = $("<h3></h3>")
const p = $("<p></p>")
const img = $("<img></img>")

h3.text("Hello, World")
p.html("<b>This</b> is my text</p>")
img.attr("src", "http://placeimg.com/640/480/nature?1")

$(".slo-mo").append(h3)
$(".slo-mo").append(p)
$(".slo-mo").append(img)

$(".normal-speed").append(
    $("h3"),
    $("p"),
    $("img")
    )
$(".rewind")
    .prepend(img)
    .prepend(p)
    .prepend(h3)
$(".turbo").html(`
    <h3>Hello, World</h3>
    <p><b>This</b> is my text</p>
    <img src="http://placeimg.com/640/480/nature?1"/>
`)
let image = $("<img></img>")

image.attr("src" , "http://placeimg.com/640/480/nature")


for (let index = 0; index < 10; index = index + 1){
    let nextItem = $( "image" + index )
    $("body").append(nextItem)
}
const myDiv = $(".my-div")

console.log(myDiv.length)

if (myDiv.length === 1) {
    console.log("I am in the if block")
} else if(myDiv.length > 1){
    console.log("I am in the else if block")
}
else {
    console.log("I am the else block")
}
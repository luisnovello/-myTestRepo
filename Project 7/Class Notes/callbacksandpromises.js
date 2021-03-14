/*
USING CALLBACKS

let watchTV = false
let doneWithHomework = true
let doneWithChores = true

function canIWatchTV(successCallback, errorCallback){
    if (doneWithChores && doneWithHomework) {
        successCallback()
    }else {
        errorCallback()
    }
}

canIWatchTV(() => {
    console.log("Yes you can watch tv");
}, () => {
    console.log("No,sorry");
});
*/

// USING PROMISES

// let watchTV = false
// let doneWithHomework = false
// let doneWithChores = true

// function canIWatchTV(){
//     return new Promise (( resolve, reject ) => {
//         if (doneWithHomework && doneWithChores) {
//             resolve("Yes you can watch tv");
//         } else {
//             reject("No,sorry");
//         }
//     })
// }

// canIWatchTV()
//     .then((message) => {
//         console.log(message)
//     })
//     .catch((message) => {
//         console.log(message)
//     })


const URL = "https://jsonplace-univclone.herokuapp.com/todos"

fetch(URL)
    .then((resonse) => resonse.json())
    .then((data) => {
        console.log(data)
    })
const USERS_URL = `https://reqres.in/api/users?per_page=2`;

const metadata = {
  minPage: 1,
  currentPage: null,
  maxPage: null,
};

function renderUser(user) {
    let createUser = `
    <div>${user.first_name} ${user.last_name}</div>
    <div>${user.email}</div>
    <img src="${user.avatar}"></img>
    `
    return createUser
}

function renderUserList(userList) {
    $("#user-list").empty()
    userList.forEach((eachUser) => {
        let renderEachUser = renderUser(eachUser)
        $("#user-list").append(renderEachUser)
    })
}

function updatePageInfo() {
    $("#page-info").text(
        `Page Number ${metadata.currentPage} out of ${metadata.maxPage}`
    )
}

function updateButtons() {
    $("#forward, #back").remove("disabled")
    if (metadata.currentPage === metadata.minPage) {
        $("#back").attr("disabled", true)
    }
    if (metadata.currentPage === metadata.maxPage){
        $("#forward").attr("disabled", true)
    }
}

function fetchUserList(currentPage = 3) {
    return fetch(`${USERS_URL}$page=${currentPage}`)
        .then((result) => {
            return result.json()
        })
        .then((userData) => {
            console.log(userData.total_pages)
            metadata.currentPage = userData.page
            console.log(currentPage)
            metadata.maxPage = userData.total_pages
            console.log(maxPage)
            renderUserList(userData.data)
            updatePageInfo()
            updateButtons()            
        })
        .catch((error) => {
            console.log("ERROR", error)
        })
}

$('#back').on('click', function () {
    if (metadata.minPage < metadata.currentPage - 1){
        fetchUserList(metadata.currentPage - 1)
    }else{
        console.log("dud")
    }
});

$('#forward').on('click', function () {
    if (metadata.maxPage > metadata.currentPage + 1){
        fetchUserList(metadata.currentPage + 1)
    }else{
        console.log("dud")
    }
});

function bootstrap() {
    fetchUserList()
}

bootstrap();
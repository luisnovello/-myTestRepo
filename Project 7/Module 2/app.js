const CARD_URL = `https://api.magicthegathering.io/v1/cards?pageSize=20`

function renderCard(card) {
    return `
    <div class="card">
    <h3>${card.name} - ${card.manaCost}</h3>
    <h4>${card.type}</h4>
    <h5 class="set-name">${card.setName}</h5>
    <pre>${card.text}</pre>
    ${card.imageUrl ? `<img src=${card.imageUrl}></img>` : ""}
  </div>
    `
}

function renderCardList(cardList) {
    $("#results").empty()
    cardList.forEach((card) => {
        let cardElement = renderCard(card)
        console.log(cardElement)
        $("#results").append(cardElement)
    })
}

function fetchCardList(url) {
    $(".searching").addClass("active")
    fetch(url)
        .then((response) => {
            return response.json()
        }).then((data) => {
            $(".searching").removeClass("active")
            renderCardList(data.cards)
        }).catch((err) => {
            console.log(err)
        })
}


$('#card-search').on('submit', function (event) {
    event.preventDefault()
    cardName = $("#cname").val()
    cardText = $("#ctext").val()
    searchURL = `${CARD_URL}&name=${cardName}&text=${cardText}`
    $("#cname,#ctext").val("")
    fetchCardList(searchURL)
});

$('#results').on('click', '.card .set-name', function () {
});
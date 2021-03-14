function makeGrid() {
    for (let index=0; index < 64; index= index + 1) {
        let cell = $("<div class='cell'></div>")
        $(".grid").append(cell)
    }
}
makeGrid();
const PALETTE = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "pink",
    "purple",
    "white",
    "black",
]

function makePalette() {
    for (let index = 0; index < PALETTE.length; index= index +1) {
        const nextColor = PALETTE[index]
        let newButton = $("<button></button>")
        newButton.css("background-color", nextColor)
        $(".palette").append(newButton)
        $(".palette button").first().addClass("active");
    }
}
makePalette();
function onPaletteClick() {
    $(".palette button").removeClass("active")
    $(this).addClass("active")
  }

  $(".palette button").click(onPaletteClick)

  function onGridclick(){
      const color = $(".palette .active").css("background-color")
      const currentColor = $(this).css("background-color")
      if (currentColor !== color){
          $(this).css("background-color", color)
      } else {
        $(this).css("background-color", "")
      }
  }
$(".grid .cell").click(onGridclick)

function onClearClick(){
    $(".grid .cell").css("background-color","")
}
$(".clear").click(onClearClick)

function onFillAllClick(){
    const color = $(".palette .active").css("background-color")
    $(".grid .cell").css("background-color", color)
}
$(".fill-all").click(onFillAllClick)

function fillEmptyClick(){
    const color = $(".palette .active").css("background-color")
    const grid  = $(".grid .cell")
    for (let index = 0; index < grid.length; index = index + 1) {
        let nextColor = $( grid[index] );
     if (nextColor.css("background-color") === "rgba(0, 0, 0, 0)") {
        $(nextColor).css("background-color", color)
     }
    }
}
$(".fill-empty").click(fillEmptyClick)

function addNewColor(){
    const newColor = $(".new-color")
    const value = newColor.val()
    let Button = $("<button></button>")
    Button.css("background-color", value)
    $(".palette").prepend(Button)
    $(".palette button").first().addClass("active")
    $(".palette button").removeClass("active")
    $(Button).addClass("active")

}

$(".add-color").click(addNewColor)
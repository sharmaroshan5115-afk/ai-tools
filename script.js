function searchTool() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    let text = cards[i].innerText.toLowerCase();

    if (text.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

function filterCategory(category) {
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    if (category === "all") {
      cards[i].style.display = "block";
    } else if (cards[i].classList.contains(category)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}
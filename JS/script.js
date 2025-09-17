// Taking Information From Api

const getBooksData = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error Request , status  ${response.status}`);
      }
    })
    .then((booksArray) => {
      console.log("Books data:", booksArray);
      generateCards(booksArray);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
};

getBooksData();

// Generate Cards

const generateCards = function (array) {
  array.forEach((element) => {
    const card = document.createElement("div");

    card.classList.add("col-12");
    card.classList.add("col-md-4");
    card.classList.add("col-lg-3");

    card.innerHTML = `<div class="card h-100 d-flex flex-column">
  <img src="${element.img}" class="card-img-top" alt="cover">
  <div class="card-body d-flex flex-column flex-grow-1">
    <h5 class="card-title"> Title: ${element.title}</h5>
    
    <p class="card-text">Price: ${element.price}</p>
  </div>
  <div class="d-flex flex-column align-items-center">
    <button class="btn btn-outline-danger mt-auto hideBtn">Delete</button>
   
  </div>
</div>`;
    const row = document.getElementById("booksRow");
    row.appendChild(card);

    const deleteButton = card.querySelector(".hideBtn");

    deleteButton.addEventListener("click", function () {
      card.remove();
    });
  });
};

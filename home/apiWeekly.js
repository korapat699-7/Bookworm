const name1 = document.querySelector(".weeklybook_name");
const descript = document.querySelector(".alltext");
const author = document.querySelector(".weeklybook_author");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
img2.style.opacity = "30%";
img3.style.opacity = "30%";

fetch(
  "https://api.nytimes.com/svc/books/v3/lists/graphic-books-and-manga.json?&api-key=JkHYnj3BOcp7aUQ4XR5QhL7Y19Xg9Bxu"
)
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    name_data = data.results.books[0].title;
    description_data = data.results.books[0].description;
    author_data = data.results.books[0].author;
    img_data1 = data.results.books[0].book_image;
    img_data2 = data.results.books[1].book_image;
    img_data3 = data.results.books[2].book_image;
    img1.src = img_data1;
    img2.src = img_data2;
    img3.src = img_data3;

    name1.innerHTML = name_data;
    descript.innerHTML = description_data;
    author.innerHTML = "Author: " + author_data;


    var selector = 0;

    img1.addEventListener("click", () => {
      selector = 0;
      img1.style.opacity = "100%";
      img2.style.opacity = "30%";
      img3.style.opacity = "30%";
      updateName();
    });
    img2.addEventListener("click", () => {
      selector = 1;
      img1.style.opacity = "30%";
      img3.style.opacity = "30%";
      img2.style.opacity = "100%";
      updateName();
    });
    img3.addEventListener("click", () => {
      selector = 2;
      img1.style.opacity = "30%";
      img2.style.opacity = "30%";
      img3.style.opacity = "100%";
      updateName();
    });

    function updateName() {
      const name_data = data.results.books[selector].title;
      const description_data = data.results.books[selector].description;
      const author_data = data.results.books[selector].author;

      name1.innerHTML = name_data;
      descript.innerHTML = description_data;
      author.innerHTML = "Author: " + author_data;
      
    }
  })

  .catch((error) => {
    console.log(error.message);
  });



  
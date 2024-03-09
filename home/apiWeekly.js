const name1 = document.querySelector(".weeklybook_name");
const descript = document.querySelector(".alltext");
const author = document.querySelector(".weeklybook_author");

const img1 = document.getElementById("weeklybook1");
const img2 = document.getElementById("weeklybook2");
const img3 = document.getElementById("weeklybook3");

fetch('https://api.nytimes.com/svc/books/v3/lists/graphic-books-and-manga.json?&api-key=JkHYnj3BOcp7aUQ4XR5QhL7Y19Xg9Bxu')
.then((response) => {
    return response.json();
})

.then((data) => {
    name_data = data.results.books[0].title;
    description_data = data.results.books[0].description;
    author_data = data.results.books[0].author;

    name1.innerHTML = name_data;
    descript.innerHTML = description_data;
    author.innerHTML = "Author: " + author_data;

    var selector = 0;

    img1.addEventListener('mouseover', () => {
        selector = 0;
        updateName();
    })
    img2.addEventListener('mouseover', () => {
        selector = 1;
        updateName();
    })
    img3.addEventListener('mouseover', () => {
        selector = 2;
        updateName();
    })

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
})

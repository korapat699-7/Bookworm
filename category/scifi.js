const search1 = document.querySelector(".search1");
search1.innerHTML = "";
search1.style.display = "block";
fetch("https://openlibrary.org/search.json?subject=sci-fi")
  .then((response) => response.json())
  .then((data) => {
    data.docs.forEach((search) => {
      fetch("https://openlibrary.org" + search.key + ".json")
        .then((response) => response.json())
        .then((bookData) => {
            

          const span_rate = document.createElement("p");
          span_rate.classList.add("span-rate");
          span_rate.innerHTML = "Rating: " + search.ratings_average;
          span_rate.style.fontWeight = "bold";

          const img = document.createElement("img");
          img.classList.add("img-buy");
          img.src = "shopping-cart (1).png"; // เพิ่ม URL ของรูปภาพที่ต้องการใช้
          img.alt = "Buy Icon";

          const search_title = document.createElement("div");
          search_title.classList.add("search-contain");
          const title = document.createElement("p");
          title.classList.add("search-title");
          title.innerHTML = search.title;

          const author = document.createElement("p");
          author.classList.add("search-author");
          author.innerHTML = "Author: " + search.author_name;

          const description = document.createElement("p");
          description.classList.add("search-description");
          description.innerHTML = bookData.description.value;

          const description_head = document.createElement("p");
          description_head.classList.add("desc-text");
          description_head.innerHTML = "Description:";

          const buy_button = document.createElement("button");
          buy_button.classList.add("buy-button");
          buy_button.appendChild(img);

          const rating = document.createElement("p");
          rating.classList.add("search-rating");
          rating.innerText = span_rate.innerHTML ;

          const image = document.createElement("img");
          image.classList.add("search-image");
          image.src =
            "https://covers.openlibrary.org/b/id/" + search.cover_i + ".jpg";
          image.alt = "none";

          search_title.append(
            image,
            title,
            author,
            description,
            description_head,
            buy_button,
            rating
          );
          search1.append(search_title);

          const imgSearch = document.createElement("img");
          imgSearch.classList.add("search-image");
          console.log(
            search.title +
              "\n" +
              search.author_name +
              "\n" +
              search.key +
              "\n" +
              bookData.description.value
          );

          buy_button.addEventListener("click", () => {
            const url ="https://www.amazon.com/dp/" + search.id_amazon[1];
            window.open(url, "_blank");
          });
        })
        .catch((error) => {
          
          const img = document.createElement("img");
          img.classList.add("img-buy");
          img.src = "shopping-cart (1).png"; // เพิ่ม URL ของรูปภาพที่ต้องการใช้
          img.alt = "Buy Icon";

          const span_rate = document.createElement("p");
          span_rate.classList.add("span-rate");
          span_rate.innerHTML = "Rating: ";
          span_rate.style.fontWeight = "bold";

          const search_title = document.createElement("div");
          search_title.classList.add("search-contain");

          const title = document.createElement("p");
          title.classList.add("search-title");
          title.innerHTML = search.title;

          const author = document.createElement("p");
          author.classList.add("search-author");
          author.innerHTML = "Author: " + search.author_name;

          const description = document.createElement("p");
          description.classList.add("search-description");
          description.innerHTML = "Not available now.";

          const description_head = document.createElement("p");
          description_head.classList.add("desc-text");
          description_head.innerHTML = "Description:";

          const buy_button = document.createElement("button");
          buy_button.classList.add("buy-button");
          buy_button.appendChild(img);

          const rating = document.createElement("p");
          rating.classList.add("search-rating");
          rating.innerText = span_rate.innerHTML + "no rating now.";

          const image = document.createElement("img");
          image.classList.add("search-image");
          image.src =
            "https://covers.openlibrary.org/b/id/" + search.cover_i + ".jpg";
          image.alt = "none";
          search_title.append(
            image,
            title,
            author,
            description,
            description_head,
            buy_button,
            rating
          );
          search1.append(search_title);

          console.log(
            search.title + "\n" + search.author_name + "\n" + search.key + "\n"
          );
          console.log(error);

          buy_button.addEventListener("click", () => {
            const url ="https://www.amazon.com/dp/" + search.id_amazon[1];
            window.open(url, "_blank");
          });
        });
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

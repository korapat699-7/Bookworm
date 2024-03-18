
fetch("https://openlibrary.org/trending/daily.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < 10; i++) {
      console.log(data.works[i].title + " " + data.works[i].author_name + data.works[i].cover_i);
      const img = document.querySelector(".img-rank" + (i + 1));
      img.src = "https://covers.openlibrary.org/b/id/" + data.works[i].cover_i + ".jpg";
      
      const title = document.querySelector(".name-rank" + (i + 1));
      title.innerHTML = data.works[i].title ;

      const cate = document.querySelector(".cate-rank" + (i + 1));
      cate.innerHTML = data.works[i].author_name ;
    }
  })

  .catch((error) => {
    console.log(error.message);
  });


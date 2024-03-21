fetch("https://openlibrary.org/subjects/comics_&_graphic_novels_manga_science_fiction.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for(let j = 0; j < 12; j ++ ) {
        const img1 = document.querySelector(".img-random" + (j + 1));
        img1.src = "https://covers.openlibrary.org/b/id/" + data.works[j].cover_id + ".jpg";
        const title_random = document.querySelector(".name-random" + (j + 1));
        title_random.innerHTML = data.works[j].title ;
    
        const cate_random = document.querySelector(".cate-random" + (j + 1));
        cate_random.innerHTML = data.works[j].authors[0].name;
      }


  })

  .catch((error) => {
    console.log(error.message);
  });


  fetch("  https://openlibrary.org/subjects/comics_&_graphic_novels_manga_historical_fiction.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    console.log(data);
    for(let j = 0; j < 13; j ++ ) {
        const img1 = document.querySelector(".img-random" + (j + 13));
        img1.src = "https://covers.openlibrary.org/b/id/" + data.works[j].cover_id + ".jpg";
        img1.alt = data.works[j].title ;;
        const title_random = document.querySelector(".name-random" + (j + 13));
        title_random.innerHTML = data.works[j].title ;
    
        const cate_random = document.querySelector(".cate-random" + (j + 13));
        cate_random.innerHTML = data.works[j].authors[0].name;
      }


  })

  .catch((error) => {
    console.log(error.message);
  });


fetch("https://openlibrary.org/subjects/comics_&_graphic_novels_manga_science_fiction.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for(let j = 0; j < 12; j ++ ) {
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
        const title_random = document.querySelector(".name-random" + (j + 13));
        title_random.innerHTML = data.works[j].title ;
    
        const cate_random = document.querySelector(".cate-random" + (j + 13));
        cate_random.innerHTML = data.works[j].authors[0].name;
      }


  })

  .catch((error) => {
    console.log(error.message);
  });


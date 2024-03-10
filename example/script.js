const searchResults = 'frieren';

fetch(
    `https://openlibrary.org/search.json?q=${searchResults}`
)
.then((response) => {
    return response.json();
})
.then((data) => {
    data.docs.forEach((item) => {
        console.log(item.title);
    });


    // เรียกใช้ฟังก์ชัน search หลังจากเตรียมข้อมูลไว้เรียบร้อยแล้ว
    search();
})
.catch((error) => {
    console.log(error.message);
});




let books = [{
 title: "Rich Dad Poor Dad",
 authorName: "Robert Kiyosaki",
 releaseYear: 1997
},
{
 title: "How to Win Friends and Influence People",
 authorName: "Dale Carnegie",
 releaseYear: 1936
},
{
 title: "I Will Teach You to Be Rich",
 authorName: "Ramit Sethi",
 releaseYear: 2019
},
{
 title: "Atomic Habits",
 authorName: "James Clear",
 releaseYear: 2018
},
{
 title: "Never Split the Difference: Negotiating As If Your Life Depended On It",
 authorName: "Chris Voss and Tahl Raz",
 releaseYear: 2016
}
];

function sortByYear(book1, book2) {
    let relYear1 = book1.releaseYear;
    let relYear2 = book2.releaseYear;

    if(relYear1 > relYear2) {
      return 1;
    } else if (relYear1 < relYear2) {
      return -1;
    } else return 0;

     
}

const year = 2000;
let filteredBooks = books.filter(book => book.releaseYear > year);


 let newBooksList = filteredBooks.sort(sortByYear) 
 .map(book => `${book.title} by ${book.authorName} released in ${book.releaseYear}`)
 .join("\n\n");
 


console.log(newBooksList);
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
 // return [[books.filter((book => !book.borrow[0].returned))], [...theRest]]
  let isIn = books.filter((book) => 
    book.borrows[0].returned);
  let isOut = books.filter((book) => 
    !book.borrows[0].returned);
  return [ isOut, isIn ]
}

function getBorrowersForBook(book, accounts) {
  //Establish updated account array
  let updatedAccountArray = []
  //Map the book object
  book.borrows.map(borrow => {
  //With the matching account id
  const account = accounts.find(account => account.id === borrow.id)
  //Adding the returned key/value pair
  account.returned = borrow.returned
  //Add to updated account array up to desired length
  if (updatedAccountArray.length < 10)
    updatedAccountArray.push(account)
  })
  return updatedAccountArray
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

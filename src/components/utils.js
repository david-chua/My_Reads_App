export const booksByShelf = (books,shelf) =>
  books.filter(book => book.shelf === shelf)


//had help with this from a mentor. To create a regex expression that will allow me to filter through the searches using the title and remove any camel casis. 

export const titleize = (string) =>
  string
  //replace function to remove camel casing if it exists
    .replace(/([A-Z])/g, ' $1')
    // replaces all results to uppercase
    .replace(/^,/, function(str){ return str.toUpperCase(); })

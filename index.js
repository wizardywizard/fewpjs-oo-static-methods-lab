class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    let books = string.split(" ")
    for ( let i = 0; i < books.length; i++){
      if (books[i] !== "the" || "a" || "an" || "but" || "of" || "and" || "for" || "at" || "by" || "from"){
        console.log(books[i].charAt(0).toUpperCase() + books[i].slice(1).toLowerCase())
      }
    }
  }
}




// if(!string.split) return string;
//     var _titleizeWord = function(string2) {
//             return string2.charAt(0).toUpperCase() + string2.slice(1).toLowerCase();
//         },
//         result = [];
//     string.split(" ").forEach(function(w) {
//         result.push(_titleizeWord(w));
//     });
//     return result.join(" ");
//   }
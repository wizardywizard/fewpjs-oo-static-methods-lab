class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    let books = string.split(" ")
    var answer = []
    for ( let i = 0; i < books.length; i++){
      let words = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
      if (i === 0){
        answer.push(books[i].charAt(0).toUpperCase() + books[i].slice(1).toLowerCase())
      }else{
        if (words.includes(books[i])){
          answer.push(books[i])
        }else{
          answer.push(books[i].charAt(0).toUpperCase() + books[i].slice(1).toLowerCase())
        }
      }
    }
    return answer.join(" ")
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
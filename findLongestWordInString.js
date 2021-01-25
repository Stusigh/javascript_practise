function findLongestWordLength(str) {
    let arrayOfStr = str.split(' ');
    let longest_word_length = 0;
    let longest_word = "";
    for(let i=0; i<arrayOfStr.length; i++) {
        let word_to_look_at = arrayOfStr[i];
        if(word_to_look_at.length > longest_word_length) {
            longest_word = word_to_look_at;
            longest_word_length = word_to_look_at.length;
        }
    }

    return longest_word_length;
  }
  





  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
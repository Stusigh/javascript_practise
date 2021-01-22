
function myFunction() {
  let list_item = document.createElement("li");
  word_to_add = document.createTextNode("Water"); 
  console.log(word_to_add)
  list_item.appendChild('hello');
  document.getElementById("list_of_words").appendChild(list_item)
};
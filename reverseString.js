function reverseString(str) {
    let arrayOfStr = str.split('');
    let returnArray = [];
        for (let i=0; i < arrayOfStr.length; i++) {
            let newChar = arrayOfStr[i];
            returnArray.unshift(newChar);
            
        }
    let returnString = returnArray.join('');
    return returnString;
  }
  
reverseString("hello");
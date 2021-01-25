function confirmEnding(str, target) {
    let arrayOfStr = str.split('');
    let arrayOfTarget = target.split('');
    let length_of_target = target.length;
    let answer = arrayOfStr.slice(arrayOfStr.length - length_of_target);
    answer = answer.join('');
    console.log(answer);
    console.log(target);
    return answer === target;
  }
  
  console.log(confirmEnding("Bastian", "ian"));
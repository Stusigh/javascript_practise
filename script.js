let users = { Alan: { online: true , age: 38}, Jeff: { online: false, age: 8 }, Sarah: { online: true, age: 38 } };

function countOnline(userObj) {
    // Only change code below this line
    let userOnlineCount = 0;
    for (let user in userObj) {
      if (userObj[user]['online'] === true) {
        userOnlineCount += 1;
        }
    }
    return userOnlineCount
}     
  


console.log(countOnline(users))
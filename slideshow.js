/*JS Functions Part 1
  Challenge 4
  challenge_4_slideshow.js*/
/*
Create a single object named "slideshow" that represents the data and 
functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE 
THE OBJECT. The object should have properties for:
1.An array called photoList that contains the names of the photos as strings
2.An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
3.A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and:
  a.logs the current photo name
  b.Otherwise, log "End of slideshow"
4.A prevPhoto() function that does the same thing, but backwards.
5.A function getCurrentPhoto() that returns the current photo from the list.
*/
let slideshow = {
    photoList: ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'],
    currentPhotoIndex: 0,
    getCurrentPhotoIndex: function(){
        console.log(this.currentPhotoIndex)
    },
    displayCurrentPhoto: function(){
        console.log(this.photoList[this.currentPhotoIndex])
    },
    nextPhoto: function(){
      if(this.currentPhotoIndex < this.photoList.length-1){
        this.currentPhotoIndex += 1;
      } else {
        console.log('End of slideshow');
      }
    },
    prevPhoto: function(){
      if(this.currentPhotoIndex > 0){
        this.currentPhotoIndex -= 1;
      } else {
        console.log('End of slideshow');
      }
    },
    getCurrentPhoto: function(){
      return this.photoList[this.currentPhotoIndex];
    }
  };
let watching_slideshow = true

while(watching_slideshow === true) {
    slideshow.getCurrentPhotoIndex();
    userInput = prompt("Please enter forward, backward or exit.");
    switch(userInput){
        case "forward":
            slideshow.nextPhoto();
            slideshow.displayCurrentPhoto();
            break;
        case "backward":
            slideshow.prevPhoto();
            slideshow.displayCurrentPhoto();
            break;
        case "exit":
            watching_slideshow = false;
            break;
        default:
            break;
    }
}
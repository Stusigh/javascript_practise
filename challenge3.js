for (let numberOfBottles = 99; numberOfBottles >= 0; numberOfBottles--) {
    if(numberOfBottles===0) {
        console.log("Hey! We need more root beer!")
    } else if(numberOfBottles===1) {
        console.log(`${numberOfBottles} bottle left on the wall!`)
        console.log(`${numberOfBottles} bottle of beer!`)
        console.log("You take it down, pass it around...")
        console.log('0 bottles left on the wall!')
    } else {
        console.log(`${numberOfBottles} bottles of beer left on the wall!`)
        console.log(`${numberOfBottles} bottles of beer!`)
        console.log("You take one down, pass it around...")
        if (numberOfBottles-1 === 1){   
            console.log(`${numberOfBottles-1} bottle left on the wall!`)
        } else {
            console.log(`${numberOfBottles-1} bottles left on the wall!`)
        }
    }
}
/*
    @function moveBgLeft
    @param {number} x
    @returns {number}
    @desc return the input param minus 10 (or some other value that you like)
*/
function moveBgLeft(x) { 
    //console.log('in function moveBgLeft');
    return x - 10;
}

const test1 = moveBgLeft(10)
console.log(test1)

/*
    @function keyUpHandler
    @param {number} keyCode
    @param {boolean} upArrowPressed
    @param {boolean} rightArrowPressed
    @param {boolean} downArrowPressed
    @param {boolean} leftArrowPressed
    @param {boolean} shiftKeyPressed 
    @returns { object }
    @desc returns all the above params but flips a switch setting val to false
*/


let keyCode = 0,
const keyUpHandler(
    upArrowPressed,
    rightArrowPressed,
    downArrowPressed,
    leftArrowPressed,
    shiftKeyPressed) => { 

    //console.log('in function keyUpHandler');

    if (keyCode === 16) {
    shiftKeyPressed = false;
    }

    if (keyCode === 37) {
    leftArrowPressed = false;
    }

    if (keyCode === 38) {
    upArrowPressed = false;
    }

    if (keyCode === 39) {
    rightArrowPressed = false;
    }

    if (keyCode === 40) {
    downArrowPressed = false;
    }

    return {
    upArrowPressed,
    rightArrowPressed,
    downArrowPressed,
    leftArrowPressed,
    shiftKeyPressed
    };
}
const test2 = keyUpHandler(0)
console.log(test2)



/*
    @function keyDownHandler
    @param {number} keyCode
    @param {boolean} upArrowPressed
    @param {boolean} rightArrowPressed
    @param {boolean} downArrowPressed
    @param {boolean} leftArrowPressed
    @param {boolean} shiftKeyPressed 
    @returns { object }
    @desc returns all the above params but flips a switch setting val to true 
*/

const keyDownHandler( keyCode = 0, upArrowPressed = false, rightArrowPressed = false, downArrowPressed = false, leftArrowPressed = false, shiftKeyPressed = false ) {
    // you need a bunch of if statements here...

let keyCode = 0,
const keyDownHandler(
    upArrowPressed,
    rightArrowPressed,
    downArrowPressed,
    leftArrowPressed,
    shiftKeyPressed) => { 


    if (keyCode === 16) {
    shiftKeyPressed = false;
    }

    if (keyCode === 37) {
    leftArrowPressed = false;
    }

    if (keyCode === 38) {
    upArrowPressed = false;
    }

    if (keyCode === 39) {
    rightArrowPressed = false;
    }

    if (keyCode === 40) {
    downArrowPressed = false;
    }

    return {
    upArrowPressed,
    rightArrowPressed,
    downArrowPressed,
    leftArrowPressed,
    shiftKeyPressed
    };
}

const test3 = keyDownHandler(0);
console.log((keyDownHandler);

/*

/*

    @function shouldJumpNow
    @param {number} y
    @returns {number}
    @desc subtracts a value from y to simulate jump
*/


const shouldJumpNow(a) => { 
    console.log('in function shouldJumpNow');
    return a - 100;
}

const test4 = shouldJumpNow(0);
console.log((shouldJumpNow);

*/

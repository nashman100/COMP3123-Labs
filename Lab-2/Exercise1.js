//Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals
//and for..of
/*
function gretter(mArray, counter){

    var greetText = 'Hello ';

    for(var index = 0; index < mArray.length; index++){
        console.log(greetText + mArray[index]);
    }
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3)
*/

const gretter = (mArray, counter) => {
    const greetText = 'Hello ';
    for (let x of mArray) {
        console.log(`${greetText}${x}`)
    }
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3)

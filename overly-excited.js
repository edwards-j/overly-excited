// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/


function addExcitement(theWordArray, mark) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp = `${buildMeUp} ${theWordArray[i]}`;

        if (i % 3 === 2) {
            buildMeUp = buildMeUp + mark; 
        }; 
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "?")

let betterSentence = ["I","always","drink","coffee","while","working","on","my","homework","and","other","projects"];

addExcitement(betterSentence, "!");
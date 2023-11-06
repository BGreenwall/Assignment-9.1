

document.addEventListener('DOMContentLoaded', function () { //this allows a specific event, aka a click of mouse, on specified element and execute a function
    const input = document.getElementById('input');  //getting ids
    const button = document.getElementById('button');
    const result = document.getElementById('result');

    button.addEventListener('click', function () { //calling the event function for onclick
        const word = input.value.toLowerCase().replace(/\s/g, ''); // convert to lowercase and remove spaces
        const reversedWord = word.split('').reverse().join(''); //reversed the word so we can check against word

        if (word === reversedWord) { //if word equals reverse word
            result.textContent = `"${input.value}" is a palindrome!`; //then a palindrome
        } else {
            result.textContent = `"${input.value}" is not a palindrome.`; //else it is not
        }

        input.value = '';  // clears textbox so user can enter it again
    });
});
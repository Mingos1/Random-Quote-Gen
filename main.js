/*
Call API with button press
Parse for quote and author
Have it appear in the DOM
Repeat
*/

//https://coolors.co/0081a7-00afb9-fdfcdc-fed9b7-f07167

const url = 'https://api.quotable.io/random',
    box = document.querySelector('main'),
    button = document.querySelector('.button'),
    arrayColors = ['#0081A7', '#00AFB9', '#E75A7C', '#731DD8', '#1B1B3A'];


function addToDOM(response) {
    let main = document.querySelector('main');
    let insertedContent = document.querySelector('#inserted-content');
    let color = arrayColors.shift();
    arrayColors.push(color);
    // Determines if the inserted content element exists

    if (insertedContent) {
        console.log('Element exists. Color now: ' + color);
        insertedContent.parentNode.removeChild(insertedContent);
    }

    console.log('Before insertion ' + insertedContent);

    insertedContent = main.insertAdjacentHTML('beforeend',
        `<article id='inserted-content' style='background-color:${color};'>
            <h2 id='quote-text'>"${response.content}"</h2>
            <h3 id='author-text'>- ${response.author}</h3> 
        </article>`
    );
    // Div creation with HTML
    console.log('After insertion' + insertedContent);
};

async function callAPI() {
    const response = await fetch(url);
    return await response.json();
}

// ON Button click, webpage pings API and display quote   
button.addEventListener('click', function () {
    callAPI()
        .then(response => {
            addToDOM(response);

            //console.log(response);
        })
        .catch(reason => console.log(reason.message))
});
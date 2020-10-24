/*
Call API with button press
Parse for quote and author
Have it appear in the DOM
Repeat
*/

const url = 'http://quotes.stormconsultancy.co.uk/random.json',
    box = document.querySelector('main'),
    button = document.querySelector('#random-button');

// ON Button click, webpage pings API and display quote   
button.addEventListener('click', function() { callAPI()
        .then(response => {
        console.log(response);

        let main = document.querySelector('main');
        // Div that's created when the Randomize button is pressed; COntains Quote and author
        let insertedContent = document.querySelector('.inserted-content');
        
        // Determines if the inserted content element exists
        if(insertedContent) insertedContent.parentNode.removeChild(insertedContent);
        
        // Div creation with HTML
        main.insertAdjacentHTML('beforeend',
            `<div class='inserted-content'>
            <h2>${response.quote}</h2>
            <h3>${response.author}</h3> 
        </div>`
        );
    })
    .catch(reason => console.log(reason.message))
});

async function callAPI() {
    const response = await fetch(url);
    return await response.json();
}

function createElement(element) {
    return document.createElement(element);
}

function append(parent, element) {
    return parent.append(element);
}
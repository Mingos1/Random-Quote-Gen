/*
Call API with button press
Parse for quote and author
Have it appear in the DOM
Repeat
*/

const callAPI = async () => {
    const response = await fetch(url);
    return await response.json();
}
const url = 'http://quotes.stormconsultancy.co.uk/random.json';
const box = document.querySelector('main');
const button = document.querySelector('');

function createElement(element) {
    return document.createElement(element);
}

function append(parent, element) {
    return parent.append(element);
}

callAPI()
    .then(data => {
        let main = document.querySelector('main');
        main.insertAdjacentHTML( 'beforeend',
            `<div>
                <h2>${data.quote}</h2>
                <h3>${data.author}</h3> 
            </div>`
        );
    })
    .catch(reason => console.log(reason.message))

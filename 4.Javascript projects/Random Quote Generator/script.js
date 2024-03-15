const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

//show Loading

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}



// Show new quotes
function newQuote() {
    loading();
    // Pick a random quote from apiQuotes Array

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

// Check if Author field is blank and replace it with a new unkown
if (!quote.author) {
    authorText.textContent = 'Unknown';
} else {
    authorText.textContent = quote.author;
}

// Check Quote Length to determine styling

if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
}else{
    quoteText.classList.remove('long-quote');
}

//set Quote,Hide Loader
setTimeout(() => {
    quoteText.textContent = quote.text;
    complete();
    }, 100);
    
}
//     quoteText.textContent = quote.text;
//     complete();
// }

// Get Quotes from API Reference

async function getQuote() {

    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    // const response = await fetch('https://api.quotable.io/random');
    // const data = await response.json();
    
    // document.getElementById("quote").innerHTML = `"${data.content}" - ${
    //     data.author ? `${data.author}` : 'Unknown'
    //     }`;
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //catch Error
        getQuote();
    }
}

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

    window.open(twitterUrl, '_blank');
}

// Event Listeners for Buttons and Toggles
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On Load
getQuote();
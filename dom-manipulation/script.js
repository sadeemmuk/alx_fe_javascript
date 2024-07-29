
let quotes = [
    {
        qoute:"to be or not to be that is the question",
        category:10
    },
]

let newQuote = document.getElementById('newQuote');

newQuote.addEventListener('click', showRandomQuote);


function addQuote(){
    let newQuoteText = document.getElementById('newQuoteText');
    let newCatogery = document.getElementById('newQuoteCategory');

    if(newQuoteText.value !== "" && newCatogery.value !== ""){
    let createAddQuoteForm = {
        text: newQuoteText.value,
        category: newCatogery.value
    }
    quotes.push(createAddQuoteForm);

    newQuoteText.value = "";
    newCatogery.value = "";
    }
}


function showRandomQuote(){
    let q = document.getElementById('quoteDisplay');
 newOne = quotes[Math.floor(Math.random() * quotes.length)].qoute;
 newCat =quotes[Math.floor(Math.random() * quotes.length)].category;
//   console.log(quotes.qoute[Math.random(0, 3)]);
q.innerHTML = newOne + newCat;

addQuote();

}
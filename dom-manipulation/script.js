
let quotes = [
    {
        qoute:"to be or not to be that is the question",
        category:10
    },
    {
        qoute:"Teach me and I will forget, Engage me and I will remember",
        category:3
    },
    {
        qoute:"Life is a game there are winner and losser all the time",
        category:2
    }
]

let newQuote = document.getElementById('newQuote');

newQuote.addEventListener('click', showRandomQuote);


function addQuote(){
    let newQuoteText = document.getElementById('newQuoteText');
    let newCatogery = document.getElementById('newQuoteCategory');

    if(newQuoteText.value !== "" && newCatogery.value !== ""){
    let hello = {
        qoute: newQuoteText.value,
        category: newCatogery.value
    }
    quotes.push(hello);

    newQuoteText.value = "";
    newCatogery.value = "";
    }
}


function showRandomQuote(){
    let q = document.getElementById('quoteDisplay');
 
//   console.log(quotes.qoute[Math.random(0, 3)]);
q.innerHTML= quotes[Math.floor(Math.random() * quotes.length)].qoute;

addQuote();

}
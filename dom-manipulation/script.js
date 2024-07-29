

let quotes = [
    {
        text:"to be or not to be that is the question",
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
    window.localStorage.setItem('text', createAddQuoteForm.text);
    window.localStorage.setItem('category', createAddQuoteForm.category);
    


    newQuoteText.value = "";
    newCatogery.value = "";
    }
}


function showRandomQuote(){
    let q = document.getElementById('quoteDisplay');
    

 newOne = quotes[Math.floor(Math.random() * quotes.length)].text;
 newCat =quotes[Math.floor(Math.random() * quotes.length)].category;

q.innerHTML = `"${newOne}" ${newCat}`;


addQuote();

}

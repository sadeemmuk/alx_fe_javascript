let newQuote = document.getElementById('newQuote');

newQuote.addEventListener('click', showRandomQuote);
let newQuoteText = document.getElementById('newQuoteText');
let newCatogery = document.getElementById('newQuoteCategory');

function addQuote(){

    if(newQuoteText.value !== "" && newCatogery.value !== ""){
    // let createAddQuoteForm = {
    //     text: newQuoteText.value,
    //     category: newCatogery.value
    // }

    // quotes.push(createAddQuoteForm);
    window.localStorage.setItem(newQuoteText.value, newCatogery.value);

    newQuoteText.value = "";
    newCatogery.value = "";
    }

}




function showRandomQuote(){
    let q = document.getElementById('quoteDisplay');

var keys = Object.keys(localStorage);
q.innerHTML = keys[Math.floor(Math.random() * keys.length)];
window.localStorage.getItem(newQuoteText);


addQuote();

}


function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }

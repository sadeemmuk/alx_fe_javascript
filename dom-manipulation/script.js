let quotes = [
  {
    text: "",
    category: ""
  }
  ]

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

function download(content, fileName, contentType){
  const a = document.createElement('a');
  const file = new Blob([content], {type:contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  }


  function onDownload(){
    var keyOne = Object.keys(localStorage);
    download(JSON.stringify(keyOne), 'yourFile.json', 'application/json');
  }


  function saveQuotes(){
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

 


  // Filter quotes according to user interaction to the category 

  function filterQuotes(){
    let filter = document.getElementById('categoryFilter');

    var keyFilter = Object.values(localStorage);
    
    for (let i =0; i < keyFilter.length; i++){
      const newOption = document.createElement('option');
      const optionText = document.createTextNode(keyFilter[i]);
      newOption.value = keyFilter[i];
      newOption.appendChild(optionText);
      filter.appendChild(newOption);

    }
    
    
    
  }

  filterQuotes();


 


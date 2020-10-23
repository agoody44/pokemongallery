// IPO Input -> Process -> Output

// Constant and State Variables (Data)

// Constat Data
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

// State Data
let pokemonData;

// Cached Elemt References
const $collection = $('#collection');

// Attached Event Listeners
$collection.on('click', 'article.card', handleClick)

// Functions
// called immediately
init();

function init() {
    getData();
}

function getData() {
    // fetch data using AJAX
    $.ajax(BASE_URL).then(function(data) {
            // take the returned data and assign it to a global states variable
            pokemonData = data;
    // call render to visualize it to the DOM
       render();
    }, function(error) {
        console.log('Error: ', error)
    });
    
}

function handleClick() {
    alert('a card was clicked');
}

function render () {
    // map over the ojects inside of the pokemonData results array
    // dynamically generate html for each element in the array
    // add that html to our collection element
    const htmlArray = pokemonData.results.map(pokemon => {
        return`
        <article class="card flex-ctr">
        <h3>${pokemon.name}</h3>
        </article>
        `;
    });

    $collection.html(htmlArray);
}
let search = document.getElementById('searchBtn');
let reset = document.getElementById('resetBtn');
const result = document.getElementById('result');


async function searchFunction() {
    let searchBar = document.getElementById('searchBar').value.toLowerCase();
    console.log(searchBar);
    const response = await fetch('travel_recommendation_api.json');

    const cities = response.countries.forEach(element => {
        element = `${cities}`
        console.log(cities);
    });;

}

function resetSearch() {
    searchBar.value = "";
}

search.addEventListener('click', searchFunction);
reset.addEventListener('click', resetSearch);








// fetch('travel_recommendation_api.json')
// .then((res) => res.json())
// .then(data => console.log(data.temples))

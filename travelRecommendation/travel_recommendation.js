let search = document.getElementById('searchBtn');
let reset = document.getElementById('resetBtn');
var result = document.getElementById('result');
var searchData;

fetchandStoreData();
async function fetchandStoreData() {
    try {
        const response = await fetch('travel_recommendation_api.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        searchData = await response.json();
        console.log("Data Stored Succssfully");
        setTimeout(() => {
            const storedData = searchData;
            if (storedData) {
                //   console.log(storedData);
            }
        }, 100);
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}


async function searchFunction() {
    let searchBar = document.getElementById('searchBar').value.toLowerCase();
    // console.log(searchBar);
    // console.log(searchData);

    var australia = searchData.countries[0].cities;
    console.log(australia);

    var japan = searchData.countries[1].cities;
    console.log(japan);

    var brazil = searchData.countries[2].cities;
    console.log(brazil);

    var temples = searchData.temples;
    console.log(temples)

    var beach = searchData.beaches;
    console.log(beach);

    result.innerHTML = '';

    if (searchBar === 'temple' || searchBar === 'temples') {
        temples.forEach(city => {

            var option = document.createElement('div')
            option.classList.add('option');

            var img = document.createElement('img');
            img.src = city.imageUrl;

            var name = document.createElement('h2');
            name.textContent = city.name;

            var description = document.createElement('p')
            description.textContent = city.description;

            var button = document.createElement('button');
            button.textContent = "VISIT";

            option.appendChild(img);
            option.appendChild(name);
            option.appendChild(description);
            option.appendChild(button);
            result.appendChild(option);

            console.log(city.name);
            console.log(city.description);
        });
    } else if (searchBar === 'australia') {
        australia.forEach(city => {
            var option = document.createElement('div')
            option.classList.add('option');

            var img = document.createElement('img');
            img.src = city.imageUrl;

            var name = document.createElement('h2');
            name.textContent = city.name;

            var description = document.createElement('p')
            description.textContent = city.description;

            var button = document.createElement('button');
            button.textContent = "VISIT";

            option.appendChild(img);
            option.appendChild(name);
            option.appendChild(description);
            option.appendChild(button);
            result.appendChild(option);

            console.log(city.name);
            console.log(city.description);
        });
    } else if (searchBar === 'japan') {
        japan.forEach(city => {
            var option = document.createElement('div')
            option.classList.add('option');

            var img = document.createElement('img');
            img.src = city.imageUrl;

            var name = document.createElement('h2');
            name.textContent = city.name;

            var description = document.createElement('p')
            description.textContent = city.description;

            var button = document.createElement('button');
            button.textContent = "VISIT";

            option.appendChild(img);
            option.appendChild(name);
            option.appendChild(description);
            option.appendChild(button);
            result.appendChild(option);

            console.log(city.name);
            console.log(city.description);
        });
    } else if (searchBar === 'brazil') {
        brazil.forEach(city => {
            var option = document.createElement('div')
            option.classList.add('option');

            var img = document.createElement('img');
            img.src = city.imageUrl;

            var name = document.createElement('h2');
            name.textContent = city.name;

            var description = document.createElement('p')
            description.textContent = city.description;

            var button = document.createElement('button');
            button.textContent = "VISIT";

            option.appendChild(img);
            option.appendChild(name);
            option.appendChild(description);
            option.appendChild(button);
            result.appendChild(option);

            console.log(city.name);
            console.log(city.description);
        });
    } else if (searchBar === 'beach' || searchBar === 'beaches') {
        beach.forEach(city => {
            var option = document.createElement('div')
            option.classList.add('option');

            var img = document.createElement('img');
            img.src = city.imageUrl;

            var name = document.createElement('h2');
            name.textContent = city.name;

            var description = document.createElement('p')
            description.textContent = city.description;

            var button = document.createElement('button');
            button.textContent = "VISIT";

            option.appendChild(img);
            option.appendChild(name);
            option.appendChild(description);
            option.appendChild(button);
            result.appendChild(option);

            console.log(city.name);
            console.log(city.description);
        });
    }
}

function resetSearch() {
    searchBar.value = "";
    searchFunction();
}

search.addEventListener('click', searchFunction);
reset.addEventListener('click', resetSearch);








// fetch('travel_recommendation_api.json')
// .then((res) => res.json())
// .then(data => console.log(data.temples))

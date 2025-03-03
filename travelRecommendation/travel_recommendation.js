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

    var australia = searchData.countries[0].cities;
    console.log(australia);

    var sydney = searchData.countries[0].cities[0];
    console.log(sydney);

    var melbourne = searchData.countries[0].cities[1];
    console.log(melbourne);

    var japan = searchData.countries[1].cities;
    console.log(japan);

    var tokyo = searchData.countries[1].cities[0];
    console.log(tokyo);

    var kyoto = searchData.countries[1].cities[1];
    console.log(kyoto);

    var brazil = searchData.countries[2].cities;
    console.log(brazil);

    var rio = searchData.countries[2].cities[0];
    console.log(rio);

    var sao = searchData.countries[2].cities[1];
    console.log(sao);

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
    } else if (searchBar === 'sydney') {
        var option = document.createElement('div')
        option.classList.add('option');

        var img = document.createElement('img');
        img.src = sydney.imageUrl;

        var name = document.createElement('h2');
        name.textContent = sydney.name;

        var description = document.createElement('p')
        description.textContent = sydney.description;

        var button = document.createElement('button');
        button.textContent = "VISIT";

        option.appendChild(img);
        option.appendChild(name);
        option.appendChild(description);
        option.appendChild(button);
        result.appendChild(option);

        console.log(sydney.name);
        console.log(sydney.description);
    } else if (searchBar === 'melbourne') {
        var option = document.createElement('div')
        option.classList.add('option');

        var img = document.createElement('img');
        img.src = melbourne.imageUrl;

        var name = document.createElement('h2');
        name.textContent = melbourne.name;

        var description = document.createElement('p')
        description.textContent = melbourne.description;

        var button = document.createElement('button');
        button.textContent = "VISIT";

        option.appendChild(img);
        option.appendChild(name);
        option.appendChild(description);
        option.appendChild(button);
        result.appendChild(option);

        console.log(melbourne.name);
        console.log(melbourne.description);
    } else if (searchBar === 'tokyo') {
        var option = document.createElement('div')
        option.classList.add('option');

        var img = document.createElement('img');
        img.src = tokyo.imageUrl;

        var name = document.createElement('h2');
        name.textContent = tokyo.name;

        var description = document.createElement('p')
        description.textContent = tokyo.description;

        var button = document.createElement('button');
        button.textContent = "VISIT";

        option.appendChild(img);
        option.appendChild(name);
        option.appendChild(description);
        option.appendChild(button);
        result.appendChild(option);

        console.log(tokyo.name);
        console.log(tokyo.description);
    } else if (searchBar === 'kyoto') {
        var option = document.createElement('div')
        option.classList.add('option');

        var img = document.createElement('img');
        img.src = kyoto.imageUrl;

        var name = document.createElement('h2');
        name.textContent = kyoto.name;

        var description = document.createElement('p')
        description.textContent = kyoto.description;

        var button = document.createElement('button');
        button.textContent = "VISIT";

        option.appendChild(img);
        option.appendChild(name);
        option.appendChild(description);
        option.appendChild(button);
        result.appendChild(option);

        console.log(kyoto.name);
        console.log(kyoto.description);
    } else if (searchBar === 'rio de janeiro') {
        var option = document.createElement('div')
        option.classList.add('option');

        var img = document.createElement('img');
        img.src = rio.imageUrl;

        var name = document.createElement('h2');
        name.textContent = rio.name;

        var description = document.createElement('p')
        description.textContent = rio.description;

        var button = document.createElement('button');
        button.textContent = "VISIT";

        option.appendChild(img);
        option.appendChild(name);
        option.appendChild(description);
        option.appendChild(button);
        result.appendChild(option);

        console.log(rio.name);
        console.log(rio.description);
    } else if (searchBar === 'sao paulo') {
        var option = document.createElement('div')
        option.classList.add('option');

        var img = document.createElement('img');
        img.src = sao.imageUrl;

        var name = document.createElement('h2');
        name.textContent = sao.name;

        var description = document.createElement('p')
        description.textContent = sao.description;

        var button = document.createElement('button');
        button.textContent = "VISIT";

        option.appendChild(img);
        option.appendChild(name);
        option.appendChild(description);
        option.appendChild(button);
        result.appendChild(option);

        console.log(sao.name);
        console.log(sao.description)
    }
}

const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);

function resetSearch() {
    searchBar.value = "";
    searchFunction();
}

search.addEventListener('click', searchFunction);
reset.addEventListener('click', resetSearch);
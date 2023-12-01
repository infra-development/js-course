'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function (countrie) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${countrie}`);
    request.send();

    request.addEventListener('load', function () {
        // console.log(this.responseText);
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        
        // console.log(data.currencies[Object.keys(data.currencies)].name);
        console.log((+data.population / 1000000).toFixed(1), 'M');
        const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(3)}M people</p>
            <p class="country__row"><span>🗣️</span>${[...Object.values(data.languages)]}</p>
            <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)].name}</p>
          </div>
        </article>`

        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = '1';
    });
};

getCountryData('usa');
getCountryData('pakistan');
getCountryData('india');
getCountryData('Bharat');
getCountryData('china');
getCountryData('portugues');








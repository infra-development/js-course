'use strict';
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" alt="${
    data.flags.alt
  }" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(3)}M people</p>
            <p class="country__row"><span>🗣️</span>${[
              ...Object.values(data.languages),
            ]}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[Object.keys(data.currencies)].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = '1';
};

const renderError = function (err) {
  countriesContainer.insertAdjacentText('beforeend', err);
  // countriesContainer.style.opacity = '1';
};
*/
///////////////////////////////////////
// const getCountryData = function (countrie) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${countrie}`);
//     request.send();

//     request.addEventListener('load', function () {
//         // console.log(this.responseText);
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         // console.log(data.currencies[Object.keys(data.currencies)].name);
//         console.log((+data.population / 1000000).toFixed(1), 'M');
//         const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.official}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(3)}M people</p>
//             <p class="country__row"><span>🗣️</span>${[...Object.values(data.languages)]}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)].name}</p>
//           </div>
//         </article>`

//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = '1';
//     });
// };

// getCountryData('usa');
// getCountryData('pakistan');
// getCountryData('india');
// getCountryData('Bharat');
// getCountryData('china');
// getCountryData('portugues');

///////////////////////////////////////////////////
/*
const renderCountry = function (data, className = '') {
     const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" alt="${data.flags.alt}" />
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
}
const getCountryAndNeighbour = function (countrie) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${countrie}`);
    request.send();
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);

        // Rander country 1
        renderCountry(data);

        // Get neighbour country(2)
        const [neighbour] = data.borders;
        if (!neighbour) return;

        // AJAX call country (2)
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
          const [data2] = JSON.parse(this.responseText);
          renderCountry(data2, 'neighbour'); 
        })  
    });   
}; 
getCountryAndNeighbour('usa');
// getCountryAndNeighbour('Bharat');

// CallBack hell
setTimeout(()=>{
  console.log('1 second passed');
  setTimeout(()=>{
    console.log('2 second passed');
    setTimeout(()=>{
      console.log('3 second passed');
      setTimeout(()=>{
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

// Promise and Fetch API
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${countrie}`);
// request.send();

// const request2 = fetch(`https://restcountries.com/v3.1/name/Bharat}`);
// console.log(request2);

// const getCountryData = function (countrie) {

//   fetch(`https://restcountries.com/v3.1/name/${countrie}`)
//     .then((response) => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not Found ${response.status}`);

//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderCountry(data[0]);
//       console.log(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0]);
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch((err) => {
//       console.error (err);
//       renderError(`Somthing went worng 💥 💥 ${err.message}. Try again`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     });

// };
// btn.addEventListener('click', function () {
//   getCountryData('usa');
// })

// getCountryData('dsefr')
/*
const getJson = function (url, errMsg = '') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (countrie) {
  getJson(
    `https://restcountries.com/v3.1/name/${countrie}`,
    `Country not Found`
  )
    .then((data) => {
      renderCountry(data[0]);
      if (!data[0].borders) throw new Error(`No Neighbour conuntry found`);
      // const neighbour = data[0].borders[0];
      const neighbour = 'dierfee';
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not Found`
      );
    })
    .then((data) => {
      renderCountry(data[0], 'neighbour');
    })
    .catch((err) => {
      renderError(`Somthing went worng 💥 💥 ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = '1';
    });
};

btn.addEventListener('click', function () {
  getCountryData('usa');
});
getCountryData('australia');
// getCountryData('dsefr')
*/

// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)
// Test data:
// §Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// §Coordinates 2: 19.037, 72.873
// §Coordinates 3: -33.933, 18.474
// GOOD LUCK 😀
/*
const btn = document.querySelector('.btn-country'); //global
const countriesContainer = document.querySelector('.countries'); //g

const resp = function (response) {
  //read
  console.log(response);
  if (!response.ok)
    throw new Error(`Problem with GeocodeAPI: ${response.status}`);
  return response.json();
};

const randerCountry = function (data) {
  //read
  // console.log(data.currencies);
  const html = `
  <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(3)}M people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.entries(data.currencies)[0][1].name
            }</p>
          </div>
    </article>
  `;
  console.dir(html);
  countriesContainer.insertAdjacentHTML('beforeend', html);
};
const reverseGeocoding = function (lat, long) {
  console.log(lat, long);
  // read
  fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
    // .then((response) => {
    //   console.log(response);
    //   if (!response.ok)
    //     throw new Error(
    //       `The requested location was not found: ${response.status}`
    //     );
    //   return response.json();
    // })
    .then((res) => resp(res))
    .then((data) => {
      console.log(data);
      if (!data) throw new Error('No Data found');
      console.log(`You are in ${data.city}, ${data.country}`);
      const country = data.country;
      return fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((res) => resp(res))
        .then((data) => randerCountry(data[0]));
    })
    .catch((err) => {
      console.error(`Something went wrong: ${err.message}`);
      countriesContainer.insertAdjacentText(
        'beforeend',
        `Something went wrong: ${err.message}`
      );
    })
    .finally((countriesContainer.style.opacity = '1'));
};

const inputIsValid = (
  latitude,
  longitude //read
) =>
  !isNaN(latitude) &&
  latitude >= -90 &&
  latitude <= 90 &&
  !isNaN(longitude) &&
  longitude >= -180 &&
  longitude <= 180;

// const whereAmI = function () {
//   //read
//   const lat = prompt('latitude');
//   const long = prompt('longitude');
//   if (!inputIsValid(lat, long)) return console.log('Input is not valid');
//   console.log(lat, long);
//   reverseGeocoding(lat, long);
// };
// reverseGeocoding(-33.933, 18.474);
// btn.addEventListener('click', whereAmI); //call stack => web

console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then((res) => {
  for (let i = 0; i < 1000000000; i++);
  console.log(res);
});
console.log('Test End');

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject(new Error('You lost your mony'));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 5 seconds');
    return wait(1);
  });

// CallBack hell
// setTimeout(()=>{
//   console.log('1 second passed');
//   setTimeout(()=>{
//     console.log('2 second passed');
//     setTimeout(()=>{
//       console.log('3 second passed');
//       setTimeout(()=>{
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then((x) => console.log(x));
Promise.reject(new Error('abc')).catch((x) => console.error(x));

// const position = navigator.geolocation.getCurrentPosition();
// console.log(position);

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => console.log(position),
    //   (err) => console.err(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition();
console.log(getPosition());
getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition().then((pos) => {
    const { latitude: lat, longitude: long } = pos.coords;
    if (!inputIsValid(lat, long)) return console.log('Input is not valid');
    reverseGeocoding(lat, long);
  });
};
btn.addEventListener('click', whereAmI); //call stack => web
*/
// Coding Challenge #2
// For this challenge you will actually have to watch the video! Then, build the image
// loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by
// yourself. Pretend you're working on your own 😉
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
// 2. When the image is done loading, append it to the DOM element with the
// 'images' class, and resolve the promise. The fulfilled value should be the
// image element itself. In case there is an error loading the image (listen for
// the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution
// PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed, hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element
// returned by the 'createImage' promise to hide the current image. You will
// need a global variable for that 😉)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong
// image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast
// GOOD LUCK 😀
/*
const imgContainer = document.querySelector('.images');
const wait = function (secondes) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, secondes * 1000);
  });
};

const createImage = function (path) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = path;
    img.addEventListener('load', function () {
      console.log(img);
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// createImage('./img/img-1.jpg');
// console.log(createImage('./img/img-1.jpg'));
// console.log(createImage('./img/img-2.jpg'));
let currentImg;
createImage('./img/img-1.jpg')
  .then((img) => {
    currentImg = img;
    console.log(img);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then((img) => {
    currentImg = img;
    console.log(img);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch((err) => console.error(err));
*/

const countriesContainer = document.querySelector('.countries');
const randerCountry = function (data) {
  console.log(data);
  const html = `
  <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(3)}M people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.entries(data.currencies)[0][1].name
            }</p>
          </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const randerError = function (err) {
  countriesContainer.insertAdjacentText('beforeend', err);
  countriesContainer.style.opacity = '1';
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: long } = pos.coords;
    // Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data **');
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country name **');
    const data = await res.json();
    randerCountry(data[0]);
  } catch (err) {
    console.log(err);
    randerError(err);
  }
};
whereAmI();
console.log('First');

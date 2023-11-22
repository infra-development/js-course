'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// let map, mapEvent;
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//     function (position) {
//             // console.log(position);
//             const { latitude } = position.coords;
//             const { longitude } = position.coords;
//             console.log(latitude);
//             console.log(longitude);
//             console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//             const coords = [latitude, longitude];
//             map = L.map('map').setView(coords, 13);

//             L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//                 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             }).addTo(map);

//             map.on('click', function (mapE) {
//                 mapEvent = mapE;
//                 form.classList.remove('hidden');
//                 inputDistance.focus();
//             })
//     }, function () {
//         alert('Could not get your position')
//     })
// }


// form.addEventListener('submit', function (e) {
//     console.log(e);
//     e.preventDefault();
//     // INPUT FIELD clear
//     inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

//     console.log(mapEvent);
//     const { lat, lng } = mapEvent.latlng;
//     console.log(lat,lng);

//     L.marker([lat,lng]).addTo(map)
//         .bindPopup(L.popup({
//             maxWidth: 250,
//             minWidth: 100,
//             autoClose: false,
//             closeOnClick: false,
//             className: 'running-popup',
//             // content:"Hello world",
//         }))
//     .setPopupContent('Workout')
//     .openPopup();   
// });

class Workout{
        constructor(distance,duration,coords) {
            this.distance = distance;
            this.duration = duration;
            this.coords = coords;
        }
}
    
class Cycling extends Workout{
        constructor(distance,duration,coords,elevationGain,speed) {
            super(distance, duration, coords);
            this.elevationGain = elevationGain;
            this.speed = speed;
        }
}

class Running extends Workout{
        constructor(distance,duration,coords,cadence,pace) {
            super(distance, duration, coords);
            this.cadence = cadence;
            this.pace = pace;
        }
}

class App{
    #map;
    #mapEvent;
    constructor() {
        this._getPosition();
        inputType.addEventListener('change', this._toggleElevationField)
        form.addEventListener('submit', this._newWorkout.bind(this));
     }
    _getPosition(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
                alert('Could not get your position')
            });
        }
    }
    _loadMap(position) {
        const { latitude,longitude } = position.coords;
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
        const coords = [latitude, longitude];
        this.#map = L.map('map').setView(coords, 13);
        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        
        // Handling click on map
        this.#map.on('click', this._showForm.bind(this));
    }
    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }
    _toggleElevationField() { 
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    }
    
    _newWorkout(e) {
        e.preventDefault();
        // INPUT FIELD clear
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        const { lat, lng } = this.#mapEvent.latlng;
        L.marker([lat,lng]).addTo(this.#map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup',
                content:"Hello world",
            }))
        // .setPopupContent('Workout')
        .openPopup();   
    }
}
   

const app = new App();
// app._getPosition();

        //     form.addEventListener('submit', function (e) {
        //     console.log(e);
        //     e.preventDefault();
        //     // INPUT FIELD clear
        //     inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

        //     console.log(mapEvent);
        //     const { lat, lng } = mapEvent.latlng;
        //     console.log(lat,lng);

        //     L.marker([lat,lng]).addTo(map)
        //         .bindPopup(L.popup({
        //             maxWidth: 250,
        //             minWidth: 100,
        //             autoClose: false,
        //             closeOnClick: false,
        //             className: 'running-popup',
        //             // content:"Hello world",
        //         }))
        //     .setPopupContent('Workout')
        //     .openPopup();   
        // });
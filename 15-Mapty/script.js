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


class Workout{
    date = new Date();
    id = (Date.now() + '').slice(-10);

    constructor(distance,duration,coords) {
        this.coords = coords; // [lat,lng]
        this.distance = distance; // in km
        this.duration = duration; // in min
    }
}
    
class Cycling extends Workout{
    constructor(distance,duration,coords,elevationGain) {
        super(distance, duration, coords);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }
    // km/min
     calcSpeed(){
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

class Running extends Workout{
    constructor(distance,duration,coords,cadence) {
        super(distance, duration, coords);
        this.cadence = cadence;
        this.calcPace();
    }
    // min/km
    calcPace(){
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

const run1 = new Running(5.2, 32, [23, -22], 178);
const cycling1 = new Cycling(14, 25, [23, -12], 378);
console.log(run1,cycling1);

////////////////////////////////////
// APPLICATION ARCHITECTURE
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
        .openPopup();   
    }
}

const app = new App();

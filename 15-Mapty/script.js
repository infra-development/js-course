'use strict';

class Workout{
    date = new Date();
    id = (Date.now() + '').slice(-10);

    constructor(distance,duration,coords) {
        this.coords = coords; // [lat,lng]
        this.distance = distance; // in km
        this.duration = duration; // in min
    }

    _setDescription() {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }
}
    
class Cycling extends Workout{
    type = 'cycling';
    constructor(distance,duration,coords,elevationGain) {
        super(distance, duration, coords);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }
    // km/min
     calcSpeed(){
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

class Running extends Workout{
    type = 'running';
    constructor(distance,duration,coords,cadence) {
        super(distance, duration, coords);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }
    // min/km
    calcPace(){
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

// const run1 = new Running(5.2, 32, [23, -22], 178);
// const cycling1 = new Cycling(14, 25, [23, -12], 378);
// console.log(run1,cycling1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

////////////////////////////////////
// APPLICATION ARCHITECTURE
class App{
    #map;
    #mapEvent;
    #workout = [];

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
    _hideForm() {
        // EMPTY INPUT
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => form.style.display = 'grid', 5000);


    }
    _toggleElevationField() { 
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    }
    _newWorkout(e) {
         e.preventDefault();
       
        // Get data from form
        const type = inputType.value;
        const duration = +inputDuration.value;
        const distance = +inputDistance.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;
        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);
        // if workout running, create running object
        if (type === "running") {
            const cadence = +inputCadence.value;
            // Check if data is valid
            // if (!Number.isFinite(distance) || !Number.isFinite(duration) || !Number.isFinite(cadence)) alert("Inputs have to be positive numbers");
            if (!validInputs(duration,distance,cadence) || !allPositive(duration,distance,cadence)) return alert("Inputs have to be positive numbers");
            workout = new Running(distance, duration, [lat, lng], cadence);
        }

        // if workout cycling, create cycling object
        if (type == "cycling") {
            const elevation = +inputElevation.value;
            // Check if data is valid
            if (!validInputs(duration,distance,elevation) && !allPositive(duration,distance)) alert("Inputs have to be positive numbers");  
            workout = new Cycling(distance, duration, [lat, lng], elevation);
        }
        // Add new object to workout array
        this.#workout.push(workout);

        // Rander workout on map as marker
        this._randerWorkoutMarker(workout); 

        // Rander workout list
        this._randerList(workout);

        // show form
        this._hideForm();
    }

    _randerWorkoutMarker(workout) {
        L.marker(workout.coords).addTo(this.#map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${workout.type}-popup`,
                // content: workout.distance,
            }))
            .setPopupContent(`${workout.type === "running" ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
            .openPopup(); 
    }

    _randerList(workout) {
        let html = `
        <div class="workout workout--${workout.type}" data-id=${workout.id}>
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === "running" ? '🏃‍♂️' : '🚴‍♀️'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>              
        `;

        if (workout.type === 'running') {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.pace}</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value">${workout.cadence}</span>
                    <span class="workout__unit">spm</span>
                </div>
            </div>
        `
        }
        if (workout.type === 'cycling') {
            html += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed}</span>
                <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⛰</span>
                <span class="workout__value">${workout.elevationGain}</span>
                <span class="workout__unit">m</span>
            </div>
        </div>
        `
        }
        form.insertAdjacentHTML('afterend', html);
    };
}

const app = new App();
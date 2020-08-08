const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector('.details');
const detailsRight = document.querySelector('.details-right');
const detailsRightBottom = document.querySelector('.details-right-bottom');

// console.log(detailsRightBottom);
// console.log(details);

const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const forecast = new Forecast();










// localStorage.clear();


const updateUI = (data) => {

  // const cityDetails = data.cityDetails;
  // const weather = data.weather;
  // const forecasts = data.forecasts;


  // destrukruryzxacja properties, czyli to samo co wyzej ale krócej:

  const { cityDetails, weather, forecasts } = data;

  // console.log(cityDetails);
  console.log(forecasts);
  // console.log(weather);


  // uaktualniej details template:

  details.innerHTML = `

     <h3 class="my-3 display-4">${cityDetails.EnglishName}</h3>
     <p class="my-3">${weather.LocalObservationDateTime}</p>
     <div class="my-3"><h4>${weather.WeatherText}</h4></div>
     <div class="my-4">
         <span class="display-4">${weather.Temperature.Metric.Value}</span>
         <span>&deg;C</span>
      `;

  detailsRight.innerHTML = `

     
         <div class="my-4">
           <h4>Pressure:</h4>
           <p class="mb-4 display-4">${weather.Pressure.Metric.Value} hPa</p>
           <p class="mb-0">Wind direction: ${weather.Wind.Direction.English}</p>
           <p class="mb-0">Wind speed: ${weather.Wind.Speed.Metric.Value} km/h</p>
           <p class="mb-0">Real feel temp: ${weather.RealFeelTemperatureShade.Metric.Value} degrees</p>
           <p class="mb-0">Cloud cover: ${weather.CloudCover} %</p>
         </div>
         
         `;

  detailsRightBottom.innerHTML = `

     
         

         <div class="my-4">
           <h4>5-day forecast:</h4> 
        </div>
           
        <div class="d-flex">

           <div class="card p-2 bg-light">
             <p class="mb-4">forecast 1:</p>
           </div>

           <div class="card p-2 bg-light">
             <p class="mb-4">forecast 2:</p>
           </div>

           <div class="card p-2 bg-light">
             <p class="mb-4">forecast 3:</p>
           </div>

           <div class="card p-2 bg-light">
             <p class="mb-4">forecast 3:</p>
           </div>

           <div class="card p-2 bg-light">
             <p class="mb-4">forecast 3:</p>
           </div>
           
        </div>
    
  `;



  // console.log(forecasts.DailyForecasts.Sun.Rise);





  // uaktualnieniae obrazów dzien i noc oraz ikon:

  // ikony:

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

  icon.setAttribute('src', iconSrc);

  console.log(iconSrc);


  // obraz dzień/noc:

  // wersja lepsza, ternary operator

  // !uwaga

  // let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

  // wersja gorsza, czyli łopatologiczne if:

  // if(weather.IsDayTime){
  //     timeSrc = 'img/day.svg';
  // } else {
  //     timeSrc = 'img/night.svg';
  // }



  // time.setAttribute('src', timeSrc);

  // !koniec


  // usuń klasę d-none (bootstrapowe display none) jeśli jest obecna:

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  };

  // console.log(data);
};



cityForm.addEventListener('submit', e => {
  // zapobieganie defaultowej akcji
  e.preventDefault();

  // pobieranie(i przycinanie o spacje przed i po) nazwy miasta

  const city = cityForm.city.value.trim();
  // resetowanie inputu formularza
  cityForm.reset();

  // uaktualnianie UI o nowe miasto

  forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));


  // Set local storage 

  localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
  forecast.updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => (err));
}


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

  // const day = data.forecasts.DailyForecasts;
  // const day = data.forecasts.DailyForecasts.Day;


  // console.log(day);

  // destrukruryzxacja properties, czyli to samo co wyzej ale krócej:

  const { cityDetails, weather, forecasts } = data;

  // console.log(cityDetails);
  // console.log(forecasts);
  // console.log(weather);


  // ! DESTRUKTURYZACJA TEGO WIELKIEGO OBIEKTU Z ODPOWIEDZI API ACCUWEATHER :

  // * dzien 1

  const day1 = (forecasts.DailyForecasts[0]);
  const { Temperature: { Maximum: { Value } } } = day1

  const day1date = (forecasts.DailyForecasts[0]);
  const { Date: data1 } = day1date



  // console.log(data1);


  const dzien1 = (dateFns.format(data1, 'ddd'));
  // console.log(dzien1);


  // ikona

  const icon1 = (forecasts.DailyForecasts[0]);
  const { Day: { Icon } } = icon1
  // console.log(Icon);



  // * dzien 2

  // console.log(Value);

  const day2 = (forecasts.DailyForecasts[1]);
  const { Temperature: { Maximum: { Value: test2 } } } = day2

  const day2date = (forecasts.DailyForecasts[1]);
  const { Date: data2 } = day2date

  // console.log(data2);

  const dzien2 = (dateFns.format(data2, 'ddd'));

  // console.log(dzien2);


  // ikona

  const icon2 = (forecasts.DailyForecasts[1]);
  const { Day: { Icon: ikona2 } } = icon2
  // console.log(ikona2);

  // console.log(test2);



  // * dzien 3

  const day3 = (forecasts.DailyForecasts[2]);
  const { Temperature: { Maximum: { Value: test3 } } } = day3

  const day3date = (forecasts.DailyForecasts[2]);
  const { Date: data3 } = day3date

  // console.log(data3);

  const dzien3 = (dateFns.format(data3, 'ddd'));

  // console.log(dzien3);


  // ikona

  const icon3 = (forecasts.DailyForecasts[2]);
  const { Day: { Icon: ikona3 } } = icon3
  // console.log(ikona3);


  // console.log(test3);

  // * dzien 4

  const day4 = (forecasts.DailyForecasts[3]);
  const { Temperature: { Maximum: { Value: test4 } } } = day4

  const day4date = (forecasts.DailyForecasts[3]);
  const { Date: data4 } = day4date

  // console.log(data4);

  const dzien4 = (dateFns.format(data4, 'ddd'));

  // console.log(dzien4);


  // ikona

  const icon4 = (forecasts.DailyForecasts[3]);
  const { Day: { Icon: ikona4 } } = icon4
  // console.log(ikona4);

  // console.log(test4);

  // * dzien 5

  const day5 = (forecasts.DailyForecasts[4]);
  const { Temperature: { Maximum: { Value: test5 } } } = day5

  const day5date = (forecasts.DailyForecasts[4]);
  const { Date: data5 } = day5date

  // console.log(data5);

  const dzien5 = (dateFns.format(data5, 'ddd'));

  // console.log(dzien5);

  // ikona

  const icon5 = (forecasts.DailyForecasts[4]);
  const { Day: { Icon: ikona5 } } = icon5
  // console.log(ikona5);

  // console.log(test5);







  const mainTime = weather.LocalObservationDateTime;
  const mainTimeFormat = (dateFns.format(mainTime, 'dddd, Do, MMMM, YYYY'));





  console.log(mainTimeFormat);


  // uaktualniej details template:

  details.innerHTML = `

     <h3 class="my-3 display-4">${cityDetails.EnglishName}</h3>
     <p class="my-3">${mainTimeFormat}</p>
     <div class="my-3"><h4>${weather.WeatherText}</h4></div>
     <div class="my-4">
         <span class="display-4">${weather.Temperature.Metric.Value}</span>
         <span>&deg;C</span>
      `;

  detailsRight.innerHTML = `

     
         <div class="my-4">
           <h4>Pressure:</h4>
           <p class="mb-4 display-4">${weather.Pressure.Metric.Value} hPa</p>
           <p class="mb-1">Wind direction: ${weather.Wind.Direction.English}</p>
           <p class="mb-1">Wind speed: ${weather.Wind.Speed.Metric.Value} km/h</p>
           <p class="mb-1">Real feel temp: ${weather.RealFeelTemperatureShade.Metric.Value} degrees</p>
           <p class="mb-1">Cloud cover: ${weather.CloudCover} %</p>
         </div>
         
         `;




  detailsRightBottom.innerHTML = `

     
         

         <div class="my-5">
           <h4>5-day forecast:</h4> 
        </div>
           
        <div class="d-flex justify-content-between flex-wrap mt-4">

           <div class="card flex-column justify-content-center p-1 border-0 bg-transparent">
             <p class="mb-0">${dzien1}</p>

               <div class="text-center dark-text">

                <img src="img/icons-small-grey/${Icon}.svg" width="75" height="75">

              </div>

             <p class="mb-0">${Value} C</p>
           </div>

           <div class="card flex-column justify-content-center p-1 border-0 bg-transparent">
             <p class="mb-0">${dzien2}</p>

               <div class="text-center dark-text icon-small">

                 <img src="img/icons-small-grey/${ikona2}.svg" width="75" height="75">

               </div>



             <p class="mb-0">${test2} C</p>
           </div>

           <div class="card flex-column justify-content-center p-1 border-0 bg-transparent">
             <p class="mb-0">${dzien3}</p>
                <div class="text-center dark-text icon-small">

                    <img src="img/icons-small-grey/${ikona3}.svg" width="75" height="75">

                </div>


             <p class="mb-0">${test3} C</p>
           </div>

           <div class="card flex-column justify-content-center p-1 border-0 bg-transparent">
             <p class="mb-0">${dzien4}</p>

                <div class="text-center dark-text icon-small">

                    <img src="img/icons-small-grey/${ikona4}.svg" width="75" height="75">

                </div>



             <p class="mb-0">${test4} C</p>
           </div>

           <div class="card flex-column justify-content-center p-1 border-0 bg-transparent">
             <p class="mb-0">${dzien5}</p>

                <div class="text-center dark-text icon-small">

                    <img src="img/icons-small-grey/${ikona5}.svg" width="75" height="75">

                </div>



             <p class="mb-0">${test5} C</p>
           </div>
           
        </div>
    
  `;




  const IkonyGold = `img/icons-gold`;
  const IkonyGoldSmall = `img/icons-gold-small`;



  // uaktualnieniae obrazów dzien i noc oraz ikon:

  // ikony:

  const iconSrc = `img/icons-grey/${weather.WeatherIcon}.svg`;

  icon.setAttribute('src', iconSrc);

  // console.log(iconSrc);





  // !zmiana koloru textu:

  const textChangeLight = () => {


    const text = document.querySelectorAll('.dark-text');

    // console.log(text);

    text.forEach(element => {
      element.classList.remove('dark-text');
      element.classList.add('light-text-2');

    })

  }

  const textChangeDark = () => {


    const text = document.querySelectorAll('#glowny .light-text-2');

    // console.log(text);

    text.forEach(element => {
      element.classList.remove('light-text-2');
      element.classList.add('dark-text');

    })

  }

  // !zmiana tla dzien/noc:

  const bgChangeNight = () => {

    const background = document.querySelector('body');
    background.classList.add('night');

    
  }


  const bgChangeDay = () => {

    const background = document.querySelector('body');
    background.classList.remove('night');

    
  }

  // !zmiana koloru ikon (zmiana zrodła z ktorego są pobierane)



  const zrodlo = () => {

    const Dzien =  'img src="img/icons-small-grey/'
    const Noc =  'img src="img/icons-small-gold/'





  }
  



  
  // !uwaga: obraz dzień/noc:
  
  // wersja lepsza, ternary operator
  // let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

  // wersja gorsza, czyli łopatologiczne if:

  if (!weather.IsDayTime) {

    //     timeSrc = 'img/day.svg';
    textChangeLight();
    bgChangeNight();

  }

  else {
    textChangeDark();
    bgChangeDay();
  }



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


class Forecast {
  constructor() {

    // wlasciwosci



    // this.key = 'LLG0dsysY40EMifWODoOLNpaF83Ed6B6';
    this.key = 'ms2bRfWWyLViQf0i3ySGGpyxDc3jkAt6';



    this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';

    this.forecastURI = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/';

  }


  // metody

  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);
    const forecasts = await this.getForecast(cityDetails.Key);

    return { cityDetails, weather, forecasts };



  }

  async getCity(city) {

    // query - zapytanie o opcjonalne parametry miasta

    const query = `?apikey=${this.key}&q=${city}`;

    const response = await fetch(this.cityURI + query);
    const data = await response.json();

    return data[0];

  }

  async getWeather(id) {

    const query = `${id}?apikey=${this.key}&details=true`

    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    // console.log(query);


    console.log(query);
    console.log(data);

    return data[0];

  }


  // !experimental stuff - forecast na kilka dni

  async getForecast(id) {


    const query = `858642?apikey=${this.key}`

    const response = await fetch(this.forecastURI + query);
    const data = await response.json();
    // console.log(query);
    // console.log(data);
    
    return data;
    

    // ! ponizej poprawne zapytanie ze stronki accuweather:

    // GET /forecasts/v1/daily/5day/858642?apikey=TtZ3JFrGXeWF2GKZXy0aOaN2sB1ibzB8 HTTP/1.1

  }



}



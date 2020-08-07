class Forecast{
  constructor(){
    
    // wlasciwosci



    this.key = 'LLG0dsysY40EMifWODoOLNpaF83Ed6B6';

    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    
  }


  // metody

  async updateCity(city){
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);

    return { cityDetails, weather };

  }

  async getCity(city){

    // query - zapytanie o opcjonalne parametry miasta
    
    const query = `?apikey=${this.key}&q=${city}`;

    const response = await fetch(this.cityURI + query);
    const data = await response.json();

    return data[0];
    
  }

  async getWeather(id){

  const query = `${id}?apikey=${this.key}&details=true`

  const response = await fetch(this.weatherURI + query);
  const data = await response.json();

  return data[0];

  }


  // !experimental stuff - forecast na kilka dni








} 


  
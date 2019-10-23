import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
      return this.http.get(
          `http://api.weatherstack.com/current?access_key=1e9ee57667efc47069f8e9b98cfe76d4&query= ` + location
      );
  }
}
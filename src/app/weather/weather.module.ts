import { AppComponent } from '../app.component';
import { WeatherComponent } from '../weather/weather.component';
import { RouterModule } from '@angular/router';
import { FormatWeather } from './format-weather.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
      WeatherComponent,
      FormatWeather
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    providers: []
  })
  export class WeatherModule { }
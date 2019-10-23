import { RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

export const routing = RouterModule.forRoot([
    {path: '', component: WeatherComponent}
])
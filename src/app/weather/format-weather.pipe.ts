import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toFarenheit'})

export class FormatWeather implements PipeTransform {
    transform(C: number) {
        return (C * 9 / 5 + 32).toFixed();
    }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textToColor'  // html -nimi
})
export class TextToColorPipe implements PipeTransform {

  defaultColor = '#B39DDB';
  colors = {
    'a': '#C62828',
    'b': '#AD1457',
    'c': '#6A1B9A',
    'd': '#512DA8',
    'e': '#303F9F',
    'f': '#1976D2',
    'g': '#0288D1',
    'h': '#FFC107',
    'i': '#00BCD4',
    'j': '#4CAF50',
    'k': '#BDBDBD',
    'l': '#90A4AE',
    'm': '#00BCD4',
    'n': '#E91E63',
    'o': '#00BCD4',
    'p': '#FFC107',
    'q': '#E91E63',
    'r': '#00BCD4',
    's': '#E91E63',
    't': '#3473bc',
  };

  transform(value: any, args ?: any): any {
    if (value == null || value === '') {
      return this.defaultColor;
    }
    const firstChar = value.charAt(0).toLowerCase();
    return this.colors[firstChar];
  }
}


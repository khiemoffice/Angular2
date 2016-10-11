import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlyHero',
  pure: false
})

export class canFlyPipe implements PipeTransform {
    transform(heroes:any[]): any[] {
     
      return heroes.filter( item => item.canFly);
    }
}
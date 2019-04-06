import { Component} from '@angular/core';
import { CITY } from '../shared/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngComponents';
  cities = CITY;

  changeTitle(pcity){
    this.title = pcity.target.value;
    console.log(pcity);
  }
}

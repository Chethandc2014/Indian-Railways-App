import {TrainlListService} from './services/trainl-list.service';
import {Component, Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TrainlListService]
})
export class AppComponent {
  title = 'INDIAN RAILWAYS';
  trains = [];
  @Input() train: string;


}

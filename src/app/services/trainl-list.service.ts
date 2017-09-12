import { Injectable } from '@angular/core';

@Injectable()
export class TrainlListService {
  trainList: Array<String>;
  constructor() {
  this.trainList = [
    'T1',
    'T2',
    'T3'
  ];
   }

  getTrainList() {
    return this.trainList;
  }

}

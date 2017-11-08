import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemeoryLoginService implements InMemoryDbService{
  createDb(){
    let authentication=[
     {'name':'chethan','password':'pass'}
    ];
    return {authentication};
  }
}

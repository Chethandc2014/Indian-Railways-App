import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemeoryLoginService implements InMemoryDbService{
  createDb(){
    let user=[
     {'name':'chethan','password':'pass'}
    ];
    return {user};
  }
}

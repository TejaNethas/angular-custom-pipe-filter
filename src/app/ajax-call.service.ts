import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxCallService {

  constructor(private httpClient: HttpClient) { }

  public empData = 'https://reqres.in/api/unknown';
  public userData = 'https://jsonplaceholder.typicode.com/users';
  public commentsData = 'https://jsonplaceholder.typicode.com/comments';
  public albumsData = 'https://jsonplaceholder.typicode.com/albums';
  public todosData = 'https://jsonplaceholder.typicode.com/todos';

  userDataGetRequest() {
    return this.httpClient.get(this.userData);
  }

  empDataGetRequest() {
    return this.httpClient.get(this.empData);
  }

  commentsDataGetRequest() {
    return this.httpClient.get(this.commentsData);
  }

  albumsDataGetRequest() {
    return this.httpClient.get(this.albumsData);
  }

  todosDataGetReq(){
    return this.httpClient.get(this.todosData);
  }

}

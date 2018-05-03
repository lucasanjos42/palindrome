import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalService {

  serverUrl: string;

  constructor(private httpClient: HttpClient) {

    this.serverUrl = 'http://localhost:5000'

   }

  palindrome(word) {
    return <any> this.httpClient
      .post(this.serverUrl + '/palindrome', word)
      .map(response => response);
  }

}

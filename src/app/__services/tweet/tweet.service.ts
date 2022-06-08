import { Injectable } from '@angular/core';
import {catchError} from "rxjs/operators";
import {Observable, Subscription, throwError} from "rxjs";
import {Tweet} from "../../interfaces/tweet";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

const baseUrl = 'http://localhost:8080/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { }

  getTweets(): Observable<any> {
    return this.http.get(baseUrl);
  }

  postTweet(tweet: Tweet): Subscription {
    return this.http.post(baseUrl, {...tweet}).subscribe(r => {});
  }

  getTweetsOfUsers(userIds: String[]): Observable<any> {
    return this.http.get(baseUrl + '/gettweets/' + userIds)
  }

}

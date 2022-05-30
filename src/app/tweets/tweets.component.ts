import { Component, OnInit } from '@angular/core';
import { Tweet } from '../interfaces/tweet';
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  message = "THIS IS A TEST TWEET"

  tweet: Tweet = {
    userId: 1,
    message: "TestMessage",
    timeSent: new Date()
  }

  constructor() { }

  ngOnInit(): void {
  }

}

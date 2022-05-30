import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Message} from "../interfaces/message";
import {AuthService} from "@auth0/auth0-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test-auth',
  templateUrl: './test-auth.component.html',
  styleUrls: ['./test-auth.component.css']
})
export class TestAuthComponent {
  public$: Observable<Message> | undefined;
  private$: Observable<Message> | undefined;
  privateScoped$: Observable<Message> | undefined;

  constructor(public auth: AuthService, private http: HttpClient) {}

  login(): void {
    this.auth.loginWithRedirect();
  }

  request(): void {
    this.public$ = this.http.get<Message>("http://localhost:8081/api/public");
    this.private$ = this.http.get<Message>("http://localhost:8081/api/private");
    this.privateScoped$ = this.http.get<Message>(
      "http://localhost:8081/api/private-scoped"
    );
  }

}
